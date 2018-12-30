import { TweekRepository } from 'tweek-local-cache';
import { TweekClient } from 'tweek-client';

type RepoOptions = {
  repo: TweekRepository;
};

type ClientOptions = {
  client: TweekClient;
};

type BaseUrlOptions = {
  baseServiceUrl: string;
};

export type TweekContextOptions = RepoOptions | ClientOptions | BaseUrlOptions;

export default (options: TweekContextOptions): TweekRepository => {
  let { repo, client, baseServiceUrl } = options as Partial<BaseUrlOptions & ClientOptions & RepoOptions>;

  if (repo) {
    return repo;
  }

  if (!client) {
    const { createTweekClient } = require('tweek-client');
    client = createTweekClient({ baseServiceUrl });
  }

  const { default: TweekLocalCache } = require('tweek-local-cache');
  return new TweekLocalCache({ client });
};
