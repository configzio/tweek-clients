import React, { Component, ReactType } from 'react';
import isEqual from 'lodash.isequal';
import { GetPolicy, TweekRepository } from 'tweek-local-cache';

export type WithTweekKeysConsumerOptions = {
  onError?: (error: Error) => void;
  getPolicy?: GetPolicy;
}

export type WithTweekKeysConsumerProps = {
  tweekRepository: TweekRepository;
}

export type KeyValueConfig = {
  path: string;
  defaultValue?: any;
  initialValue?: any;
}

export type UnsubscribeProps = {
  unsubscribe: () => void;
}

const getKeyValueConfig = (value): KeyValueConfig => {
  if (typeof value === 'object') {
    return value;
  }
  return {path: value};
};

export default function<T extends {}>(
  keyPropsMapping: Record<keyof T, string | KeyValueConfig>,
  { onError, getPolicy }: WithTweekKeysConsumerOptions = {},
) {
  const keysProps = Object.entries(keyPropsMapping).reduce((acc, [key, value]) => ({...acc, [key]: getKeyValueConfig(value)}), {}) as Record<keyof T, KeyValueConfig>;

  return function<TProps extends T>(BaseComponent: ReactType<TProps>) {
    type Props = WithTweekKeysConsumerProps & Pick<TProps, Exclude<keyof TProps, keyof T | keyof UnsubscribeProps>>;

    return class withTweekKeysConsumer extends Component<Props, Record<keyof T, any>> {
      // @ts-ignore TS2339
      static displayName = `withTweekKeysConsumer(${BaseComponent.displayName || BaseComponent.name || 'Component'})`;

      state = Object.entries(keysProps).reduce((acc, [key, {initialValue, defaultValue}]: [string, any]) => ({...acc, [key]: initialValue || defaultValue}), {}) as Record<keyof T, any>;
      private _unsubscribeRequested = false;
      private _subscriptions: ZenObservable.Subscription[] = [];

      componentDidMount() {
        this._unsubscribeRequested = false;
        this._subscribeToKeys();
      }

      componentDidUpdate(prevProps: Readonly<Props>) {
        if (!this._unsubscribeRequested && prevProps.tweekRepository !== this.props.tweekRepository) {
          this._unsubscribe();
          this._subscribeToKeys();
        }
      }

      componentWillUnmount() {
        this._unsubscribe();
      }

      unsubscribe = () => {
        this._unsubscribeRequested = true;
        this._unsubscribe();
      };

      get isSubscribed() {
        return this._subscriptions.length > 0;
      }

      private _subscribeToKeys() {
        this._subscriptions = Object.entries(keysProps).map(([key, {path, defaultValue}]: [string, any]) => {
          const isScanKey = path.split('/').pop() === '_';

          return this.props.tweekRepository.observe(path, getPolicy).subscribe(
            result => {
              if (!isScanKey) {
                result = result.value;
              }
              if (defaultValue !== undefined && (result === undefined || result === null)) {
                result = defaultValue;
              }
              this.setState(state => {
                if (isEqual(state[key], result)) {
                  return null;
                }
                return { [key]: result } as any;
              });
            },
            error => {
              if (onError) onError(error);
              else console.error(error);
              this._unsubscribe();
            },
          );
        });
      }

      private _unsubscribe() {
        this._subscriptions.forEach(x => x.unsubscribe());
        this._subscriptions = [];
      };

      private _shouldRender() {
        return Object.keys(keysProps).every(key => this.state[key] !== undefined);
      }

      render() {
        const shouldRender = this._shouldRender();
        if (!shouldRender) {
          return null;
        }

        const {tweekRepository: _, ...props} = this.props;
        // @ts-ignore TS2604
        return <BaseComponent unsubscribe={this.unsubscribe} {...props} {...this.state} />;
      }
    };
  }
}
