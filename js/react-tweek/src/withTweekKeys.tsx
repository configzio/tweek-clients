import React, { Component } from 'react';
import { camelize } from 'humps';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { GetPolicy } from 'tweek-local-cache';

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
) => EnhancedComponent => {
  const isScanKey = path.split('/').pop() === '_';

  return class extends Component<{}, {tweekProps: any}> {
    static displayName = `withTweekKeys(${EnhancedComponent.displayName || EnhancedComponent.name || 'Component'})`;
    static contextTypes = {
      [repoKey]: PropTypes.object,
    };

    state = {tweekProps: undefined};
    subscription: ZenObservable.Subscription | null = null;

    componentWillMount() {
      if (initialValue !== undefined) {
        this.setTweekValue(isScanKey ? initialValue : { value: initialValue });
      }

      this.subscription = this.context[repoKey].observe(path, getPolicy).subscribe(
        result => {
          this.setTweekValue(result);
          if (once) {
            this.unsubscribe();
          }
        },
        error => {
          if (onError) onError(error);
          else console.error(error);
          this.unsubscribe();
        },
      );
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    unsubscribe() {
      this.subscription && this.subscription.unsubscribe();
      this.subscription = null;
    }

    setTweekValue = (result: any = {}) => {
      let tweekProps;

      if (isScanKey) {
        tweekProps = mergeProps ? result : { [propName || 'tweek']: result };
      } else {
        const configName = path.split('/').pop();
        tweekProps = mergeProps
          ? { [propName || camelize(configName)]: result.value }
          : { [propName || 'tweek']: { [camelize(configName)]: result.value } };
      }
      this.setState({ tweekProps });
    };

    shouldComponentUpdate(nextProps, nextState) {
      return !isEqual(this.props, nextProps) || !isEqual(this.state.tweekProps, nextState.tweekProps);
    }

    render() {
      return this.state.tweekProps ? <EnhancedComponent {...this.props} {...this.state.tweekProps} /> : null;
    }
  };
};
