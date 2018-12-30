import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import withTweekKeysConsumer, {
  KeyValueConfig,
  UnsubscribeProps,
  WithTweekKeysConsumerOptions,
} from './withTweekKeysConsumer';

type MockRepoOptions = {
  results?: {[key:string]: any[]};
  error?: any;
}

class BaseComponent extends Component<UnsubscribeProps & {shouldUnsubscribe: boolean}> {
  componentDidMount() {
    const {unsubscribe, shouldUnsubscribe} = this.props;
    if (shouldUnsubscribe) {
      unsubscribe();
    }
  }

  render() {
    return <div {...this.props} />
  }
}

describe('withTweekKeysConsumer', () => {
  let observeMock: jest.Mock;
  let unsubscribeMock: jest.Mock;
  let subscribeMock: jest.Mock;
  let shouldUnsubscribe = false;

  beforeEach(() => {
    shouldUnsubscribe = false;
  });

  const mockRepository = ({ results, error }: MockRepoOptions = {}) => {
    unsubscribeMock = jest.fn();
    subscribeMock = jest.fn((path, onNext, onError) => {
      if (error) {
        setImmediate(() => onError(error));
      }

      const values = results && results[path];
      if (values) {
        values.forEach(result => {
          setImmediate(() => {
            if (!unsubscribeMock.mock.calls.length) {
              onNext(result);
            }
          });
        });
      }

      return { unsubscribe: unsubscribeMock };
    });

    observeMock = jest.fn((path: string) => {
      return { subscribe: (...args) => subscribeMock(path, ...args) };
    });
  };

  const renderComponent = async (keyValueMapping: {[propName: string]: KeyValueConfig | string}, config?: WithTweekKeysConsumerOptions) => {
    const withTweekKeysHoc = withTweekKeysConsumer(keyValueMapping, config);
    const Component = withTweekKeysHoc(BaseComponent) as any;
    const component = renderer.create(<Component shouldUnsubscribe={shouldUnsubscribe} tweekRepository={{ observe: observeMock }}/>);

    await new Promise(res => setImmediate(res));

    return component;
  };

  test('renders only if all keys are present', async () => {
    mockRepository();

    const path = 'some_path';

    const component = await renderComponent({someKey: path});

    expect(observeMock).toBeCalledWith(path, undefined);

    let tree = component.toJSON();
    expect(tree).toBeNull();

    component.unmount();
    expect(unsubscribeMock).toBeCalled();
  });

  test('maps key values to base component', async () => {
    const path:string = 'some_path';
    const scanPath: string = 'some_scan_path/_';
    const value = 'some value';
    const scanValue = {a:'b'};
    mockRepository({results:  {[path]: [{value}], [scanPath]: [scanValue]}});

    const component = await renderComponent({someKey: path, someScanKey: scanPath});

    expect(observeMock).toBeCalledWith(path, undefined);
    expect(observeMock).toBeCalledWith(scanPath, undefined);

    let tree = component.toJSON();
    expect(tree.props.someKey).toEqual(value);
    expect(tree.props.someScanKey).toEqual(scanValue);

    component.unmount();
    expect(unsubscribeMock).toBeCalled();
  });

  test('renders changes', async () => {
    const path: string = 'some_path';
    const value = 'second value';
    mockRepository({results:  {[path]: [{value: 'first value'}, {value}]}});

    const component = await renderComponent({someKey: path});

    expect(observeMock).toBeCalledWith(path, undefined);

    let tree = component.toJSON();
    expect(tree.props.someKey).toEqual(value);

    component.unmount();
    expect(unsubscribeMock).toBeCalled();
  });

  test('unsubscribes from changes', async () => {
    const path: string = 'some_path';
    const value = 'first value';
    shouldUnsubscribe = true;
    mockRepository({results:  {[path]: [{value}, {value: 'second value'}]}});

    const component = await renderComponent({someKey: path});

    expect(observeMock).toBeCalledWith(path, undefined);

    let tree = component.toJSON();
    expect(tree.props.someKey).toEqual(value);

    component.unmount();
    expect(unsubscribeMock).toBeCalled();
  });

  test('adds default values', async () => {
    const path:string = 'some_path';
    const otherPath: string = 'some_other_path';
    const value = 'some value';
    const otherValue = {a:'b'};
    mockRepository({results:  {[path]: [{value}]}});

    const component = await renderComponent({someKey: {path, defaultValue: 'some default value'}, someOtherKey: {path: otherPath, defaultValue: otherValue}});

    expect(observeMock).toBeCalledWith(path, undefined);
    expect(observeMock).toBeCalledWith(otherPath, undefined);

    let tree = component.toJSON();
    expect(tree.props.someKey).toEqual(value);
    expect(tree.props.someOtherKey).toEqual(otherValue);

    component.unmount();
    expect(unsubscribeMock).toBeCalled();
  });

  test('with error handler', async () => {
    let error: Error|null = null;
    let expectedError = 'test error';
    const path = 'path/someKey';
    mockRepository({ error: expectedError });

    await renderComponent({someKey: path}, { onError: e => (error = e) });

    expect(error).toEqual(expectedError);
    expect(unsubscribeMock).toBeCalled();
  });

  test('with getPolicy', async () => {
    const path = 'path/someKey';
    const getPolicy: any = 'somePolicy';
    mockRepository();

    await renderComponent({someKey: path}, { getPolicy });

    expect(observeMock).toBeCalledWith(path, getPolicy);
  });
});
