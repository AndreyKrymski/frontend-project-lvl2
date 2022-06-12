import fs from 'fs';
import genDiff from '../src/index.js';

const readFile = (filePath, perem = 'utf8') => fs.readFileSync(filePath, perem);

describe('my tests', () => {
  test('genDiff from file json', () => {
    const result = readFile('__fixtures__/result1json.txt');
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
  });
  test('gendiff file test yaml', () => {
    const result = readFile('__fixtures__/resYaml.txt');
    expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toEqual(result);
  });
  test('gendiff file test plain json', () => {
    const result = readFile('__fixtures__/resPlainJson.txt');
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toEqual(result);
  });
  test('gendiff file test plain yaml', () => {
    const result = readFile('__fixtures__/resPlainYaml.txt');
    expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toEqual(result);
  });
  test('gendiff file test json json', () => {
    const result = readFile('__fixtures__/resJsonJs.txt');
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json')).toEqual(result);
  });
  test('gendiff file test json yaml', () => {
    const result = readFile('__fixtures__/resJsonYaml.txt');
    expect(genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')).toEqual(result);
  });
});
