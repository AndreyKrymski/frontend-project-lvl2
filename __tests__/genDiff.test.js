import func from '../parsers/exampleFunction.js';
import jsonParsers from '../parsers/jsonParser.js';
import logicJson from '../parsers/logicJson.js';
import genDiff from '../src/index.js';

const file1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};
const result2 = ['   host: hexlet.io', ' + verbose: true', ' + timeout: 20', ' - timeout: 50', ' - follow: false',
  ' - proxy: 123.234.53.22'];
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
 + verbose: true
}`;
describe('my tests', () => {
  test('func', () => {
    expect(func(file1, file2)).toEqual(result);
  });

  test('jsonParsers', () => {
    expect(jsonParsers('__fixtures__/file1.json')).toEqual(file1);
    expect(jsonParsers('__fixtures__/file2.json')).toEqual(file2);
  });

  test('logicJson', () => {
    expect(logicJson(result2)).toEqual(result);
  });

  test('genDiff', () => {
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
    expect(genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toEqual(result);
    expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(result);
  });
});
