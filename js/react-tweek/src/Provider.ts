import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { TweekRepository } from 'tweek-local-cache';
import { TweekClient } from 'tweek-client';

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

      let { repo, client, baseServiceUrl } = props;

      if (repo) {
        this.tweekRepo = repo;
      } else {
        if (!client) {
          const { createTweekClient } = require('tweek-client');
          client = createTweekClient({ baseServiceUrl });
        }
        const TweekLocalCache = require('tweek-local-cache').default;
        this.tweekRepo = new TweekLocalCache({ client });
      }
    }

    render() {
      return Children.only(this.props.children);
    }
  };
}

export default createProvider();
