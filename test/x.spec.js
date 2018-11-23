// import { expect } from 'chai';
import assert from 'assert'
import { describe, it } from 'mocha'
import Storage from '../src/Storage'

const storage = new Storage();
const session = new Storage('session');

const test1 = {
  name: 'test',
};
const test2 = 1234;


storage.set('test1', test1);

describe('kit-cache', () => {
  describe('localStorage', () => {
    it('test1', () => {
      storage.set('test1', test1);
      const result = storage.get('test1');
      assert.equal(JSON.stringify(result), JSON.stringify(test1));
    })
    it('test2', () => {
      storage.set('test2', test2);
      const result = storage.get('test2');
      assert.equal(JSON.stringify(result), JSON.stringify(test2));
    })
  })
  describe('sessionStorage', () => {
    it('test1', () => {
      session.set('test1', test1);
      const result = session.get('test1');
      assert.equal(JSON.stringify(result), JSON.stringify(test1));
    })
    it('test2', () => {
      session.set('test2', test2);
      const result = sessinpmon.get('test2');
      assert.equal(JSON.stringify(result), JSON.stringify(test2));
    })
  })
})
