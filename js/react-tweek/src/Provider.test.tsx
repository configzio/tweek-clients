jest.mock('./getTweekLocalCache');

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TestUtils from 'react-dom/test-utils';
import Provider, { createProvider } from './Provider';
import getTweekLocalCacheMock from './getTweekLocalCache';

const createChild = (repoKey = 'tweekRepo') => {
  return class extends Component {
    static contextTypes = {
      [repoKey]: PropTypes.object.isRequired,
    };

    render() {
      return <div />;
    }
  };
};

describe('Provider', () => {
  const Child = createChild();

  const repositoryMock: any = {
    prepare: jest.fn(),
    get: jest.fn(),
    refresh: jest.fn(),
  };

  beforeEach(() => {
    (getTweekLocalCacheMock as jest.Mock).mockReturnValue(repositoryMock);
  });

  it('should add the store to the child context', () => {
    const tree = TestUtils.renderIntoDocument(
      <Provider repo={repositoryMock}>
        <Child />
      </Provider>,
    );
    const child = TestUtils.findRenderedComponentWithType(tree, Child);
    expect(child.context.tweekRepo).toBe(repositoryMock);
  });

  it('should add the store to the child context using a custom store key', () => {
    const repoKey = 'customRepoKey';
    const CustomProvider = createProvider({ repoKey });
    const CustomChild = createChild(repoKey);

    const tree = TestUtils.renderIntoDocument(
      <CustomProvider repo={repositoryMock}>
        <CustomChild />
      </CustomProvider>,
    );

    const child = TestUtils.findRenderedComponentWithType(tree, CustomChild);
    expect(child.context.customRepoKey).toBe(repositoryMock);
  });

  it('should create a repository if client is passed', () => {
    const client: any = 'come client';
    const tree = TestUtils.renderIntoDocument(
    <Provider client={client}>
        <Child />
      </Provider>,
    );
    const child = TestUtils.findRenderedComponentWithType(tree, Child);

    expect(getTweekLocalCacheMock).toBeCalledWith({client});
    expect(child.context.tweekRepo).toBe(repositoryMock);
  });

  it('should create client and repository if baseServiceUrl is passed', () => {
    const baseServiceUrl = 'someUrl';
    const tree = TestUtils.renderIntoDocument(
      <Provider baseServiceUrl={baseServiceUrl}>
        <Child />
      </Provider>,
    );
    const child = TestUtils.findRenderedComponentWithType(tree, Child);

    expect(getTweekLocalCacheMock).toBeCalledWith({baseServiceUrl});
    expect(child.context.tweekRepo).toBe(repositoryMock);
  });
});
