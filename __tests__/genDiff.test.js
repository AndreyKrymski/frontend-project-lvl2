import { test, expect } from '@jest/globals';
import func from '../parsers/exampleFunction.js';

const file1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const file2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};
const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  + timeout: 20
  - timeout: 50
  - verbose: true
 }`;

test('gennDiff', () => {
  expect(func(file1, file2)).toEqual(result);
});
