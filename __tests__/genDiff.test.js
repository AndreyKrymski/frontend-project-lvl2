import fs from 'fs';
import genDiff from '../src/index.js';

const readFile = (filePath, perem = 'utf8') => fs.readFileSync(filePath, perem);
describe('my tests', () => {
  const testCase = [
    {
      path1: '__fixtures__/file1.json',
      path2: '__fixtures__/file2.json',
      expected: '__fixtures__/result1json.txt',
      format: 'stylish',
    },
    {
      path1: '__fixtures__/file1.yaml',
      path2: '__fixtures__/file2.yaml',
      expected: '__fixtures__/resYaml.txt',
      format: 'stylish',
    },
    {
      path1: '__fixtures__/file1.json',
      path2: '__fixtures__/file2.json',
      expected: '__fixtures__/resPlainJson.txt',
      format: 'plain',
    },
    {
      path1: '__fixtures__/file1.yaml',
      path2: '__fixtures__/file2.yaml',
      expected: '__fixtures__/resPlainYaml.txt',
      format: 'plain',
    },
    {
      path1: '__fixtures__/file1.json',
      path2: '__fixtures__/file2.json',
      expected: '__fixtures__/resJsonJs.txt',
      format: 'json',
    },
    {
      path1: '__fixtures__/file1.yaml',
      path2: '__fixtures__/file2.yaml',
      expected: '__fixtures__/resJsonYaml.txt',
      format: 'json',
    },

  ];
  testCase.forEach((test) => {
    it(
      `genDiff file ${test.path1.slice(19)}, format: ${test.format}`,
      () => {
        const result = genDiff(test.path1, test.path2, test.format);
        expect(result).toEqual(readFile(test.expected));
      },
    );
  });
});
