import getTweekLocalCache from './getTweekLocalCache';

const repo: any = { a: 'some repo' };

jest.mock('tweek-client', () => {
  const createTweekClient = jest.fn();
  return { createTweekClient };
});

jest.mock('tweek-local-cache', () => {
  const tweekLocalCacheMock = jest.fn(() => repo);
  return { default: tweekLocalCacheMock };
});

describe('getTweekLocalCache', () => {
  const { createTweekClient: createTweekClientMock } = require('tweek-client');
  const { default: tweekLocalCacheMock } = require('tweek-local-cache');

  it('should return repo if passed', () => {
    const result = getTweekLocalCache({ repo });

    expect(result).toEqual(repo);
  });

  it('should create a repository if client is passed', () => {
    const client: any = 'some client';

    const result = getTweekLocalCache({ client });

    expect(tweekLocalCacheMock).toBeCalledWith({ client });
    expect(result).toEqual(repo);
  });

  it('should create client and repository if baseServiceUrl is passed', () => {
    const baseServiceUrl = 'someUrl';

    const result = getTweekLocalCache({ baseServiceUrl });

    expect(createTweekClientMock).toBeCalledWith({ baseServiceUrl });
    expect(tweekLocalCacheMock).toBeCalled();
    expect(result).toEqual(repo);
  });
});
