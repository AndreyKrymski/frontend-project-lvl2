import fs from 'fs';
import genDiff from '../src/index.js';

const readFile = (filePath, perem = 'utf8') => fs.readFileSync(filePath, perem);

describe('my tests', () => {
  test('genDiff from file json', () => {
    const result = readFile('__fixtures__/result1json.txt');
    expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(result);
  });
});
