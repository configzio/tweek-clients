import 'mocha';
import chai = require('chai');
import getenv = require('getenv');
const expect = chai.expect;
import TweekRepository from '../../';
import { MemoryStore } from '../../';
import { createTweekClient, TweekClient, ITweekClient, Context } from '../../../tweek-rest';

const TWEEK_LOCAL_API = getenv.string('TWEEK_LOCAL_API', 'http://127.0.0.1:1111');

describe('tweek repo behavior test', () => {
  let _tweekRepo: TweekRepository;
  let _tweekClient: ITweekClient;

  async function initTweekRepository(context: Context = {}) {
    _tweekClient = createTweekClient(TWEEK_LOCAL_API + '/configurations/',
      {},
      (url: string) => <any>fetch(url).then(r => r.json()));

    const store = new MemoryStore();
    _tweekRepo = new TweekRepository({ client: _tweekClient, store });
    _tweekRepo.context = context

    await _tweekRepo.init();
  };

  const testDefenitions: {
    pathsToPrepare: string[],
    expectedKeys: { keyName: string, value: any }[],
    context: Context
  }[] = [];

  testDefenitions.push({
    context: {},
    pathsToPrepare: [
      '@tweek_clients_tests/test_category/test_key1'
    ],
    expectedKeys: [
      { keyName: '@tweek_clients_tests/test_category/test_key1', value: 'def value' },
    ]
  });

  testDefenitions.push({
    context: {},
    pathsToPrepare: [
      '@tweek_clients_tests/test_category/test_key1',
      '@tweek_clients_tests/test_category/test_key2',
      '@tweek_clients_tests/test_category2/user_fruit'
    ],
    expectedKeys: [
      { keyName: '@tweek_clients_tests/test_category/test_key1', value: 'def value' },
      { keyName: '@tweek_clients_tests/test_category/test_key2', value: false },
      { keyName: '@tweek_clients_tests/test_category2/user_fruit', value: 'apple' },
    ]
  });

  testDefenitions.push({
    context: {
      device: {
        'DeviceOsType': 'Ios',
        'PartnerBrandId': 'testPartner',
        'DeviceType': 'Desktop'
      }
    },
    pathsToPrepare: [
      '@tweek_clients_tests/test_category/test_key1',
      '@tweek_clients_tests/test_category/test_key2',
      '@tweek_clients_tests/test_category2/user_fruit'
    ],
    expectedKeys: [
      { keyName: '@tweek_clients_tests/test_category/test_key1', value: 'ios value' },
      { keyName: '@tweek_clients_tests/test_category/test_key2', value: true },
      { keyName: '@tweek_clients_tests/test_category2/user_fruit', value: 'orange' },
    ]
  });

  testDefenitions.push({
    context: {
      device: {
        'DeviceOsType': 'Ios',
        'PartnerBrandId': 'testPartner',
        'DeviceType': 'Desktop'
      }
    },
    pathsToPrepare: ['@tweek_clients_tests/test_category/_', '@tweek_clients_tests/test_category2/_'],
    expectedKeys: [
      { keyName: '@tweek_clients_tests/test_category/test_key1', value: 'ios value' },
      { keyName: '@tweek_clients_tests/test_category/test_key2', value: true },
      { keyName: '@tweek_clients_tests/test_category2/user_fruit', value: 'orange' },
    ]
  });

  testDefenitions.push({
    context: {
      device: {
        'DeviceType': 'Desktop'
      }
    },
    pathsToPrepare: ['@tweek_clients_tests/_'],
    expectedKeys: [
      { keyName: '@tweek_clients_tests/test_category/test_key1', value: 'def value' },
      { keyName: '@tweek_clients_tests/test_category/test_key2', value: false },
      { keyName: '@tweek_clients_tests/test_category2/user_fruit', value: 'orange' }
    ]
  });

  testDefenitions.forEach(test =>
    it('should succeed get keys values', async () => {
      // Arrange
      await initTweekRepository(test.context);

      test.pathsToPrepare.forEach(x => _tweekRepo.prepare(x));
      const getKeysValuesPromises: Promise<any>[] = [];

      // Act
      await _tweekRepo.refresh();

      // Assert
      test.expectedKeys.forEach(x => {
        getKeysValuesPromises.push(_tweekRepo.get(x.keyName));
      });

      await Promise.all(getKeysValuesPromises)
        .then(values => {
          values.forEach((x, index) =>
            expect(x.value).to.eql(test.expectedKeys[index].value, 'should have correct value'));
        })
        .catch(() => { throw 'failed getting keys' });
    }));
});