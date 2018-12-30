import React, { Component } from 'react';
import { camelize } from 'humps';
import PropTypes from 'prop-types';
import { GetPolicy } from 'tweek-local-cache';
import withTweekKeysConsumer, {
  UnsubscribeProps,
  WithTweekKeysConsumerOptions,
} from './withTweekKeysConsumer';

export type WithTweekKeysOptions = {
  mergeProps?: boolean;
  propName?: string;
  onError?: (error: Error) => void;
  repoKey?: string;
  getPolicy?: GetPolicy
  once?: boolean;
  initialValue?: any;
}

export default (
  path: string,
  { mergeProps = true, propName, onError, repoKey = 'tweekRepo', getPolicy, once, initialValue }: WithTweekKeysOptions = {},
) => BaseComponent => {
  const isScanKey = path.split('/').pop() === '_';
  const options: WithTweekKeysConsumerOptions = { onError, getPolicy};
  const keysMapping = {_tweekProps: {path, initialValue}};
  const enhance = withTweekKeysConsumer(keysMapping, options);

  type Props = UnsubscribeProps & {_tweekProps: any};

  class InnerComponent extends Component<Props> {
    private _unsubscribed = false;

    componentDidMount() {
      if (once && !this._unsubscribed) {
        this._unsubscribed = true;
        this.props.unsubscribe();
      }
    }

    render () {
      const {unsubscribe: _, _tweekProps, ...props} = this.props;

      let tweekProps: {};
      if (isScanKey) {
        tweekProps = mergeProps ? _tweekProps : { [propName || 'tweek']: _tweekProps };
      } else {
        const configName = path.split('/').pop();
        tweekProps = mergeProps
          ? { [propName || camelize(configName)]: _tweekProps }
          : { [propName || 'tweek']: { [camelize(configName)]: _tweekProps } };
      }

      return <BaseComponent {...props} {...tweekProps} />;
    }
  }

  const EnhancedComponent = enhance(InnerComponent);

  return class WithTweekKeys extends Component<{}, {tweekProps: any}> {
    static displayName = `withTweekKeys(${BaseComponent.displayName || BaseComponent.name || 'Component'})`;
    static contextTypes = {
      [repoKey]: PropTypes.object,
    };

    render() {
      return <EnhancedComponent tweekRepository={this.context[repoKey]} {...this.props} />
    }
  };
};
