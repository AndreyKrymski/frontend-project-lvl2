import parse from './parsers/parse.js';
import findDifferce from './comparer/findDifference.js';
import printResult from './foramatters/ind.js';

const genDiff = (filepath1, filepath2, format) => {
  const object1 = parse(filepath1);
  const object2 = parse(filepath2);

  const differnce = findDifferce(object1, object2);
  const result = printResult(differnce, format);
  return result;
};

export default genDiff;

genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json');
