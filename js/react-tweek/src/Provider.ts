import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { TweekRepository } from 'tweek-local-cache';
import { TweekClient } from 'tweek-client';
import getTweekLocalCache, { TweekContextOptions } from './getTweekLocalCache';

export type ProviderProps = {
  repo?: TweekRepository;
  client?: TweekClient;
  baseServiceUrl?: string;
};

export function createProvider({ repoKey = 'tweekRepo' } = {}) {
  return class Provider extends Component<ProviderProps> {
    static displayName = 'Provider';

    static childContextTypes = {
      [repoKey]: PropTypes.object,
    };

    tweekRepo: TweekRepository;

    getChildContext = () => ({ [repoKey]: this.tweekRepo });

    constructor(props: ProviderProps, context) {
      super(props, context);

      const { repo, client, baseServiceUrl } = props;
      this.tweekRepo = getTweekLocalCache({ repo, client, baseServiceUrl } as TweekContextOptions);
    }

    render() {
      return Children.only(this.props.children);
    }
  };
}

export default createProvider();
