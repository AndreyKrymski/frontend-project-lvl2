import jsonParser from '../parsers/jsonParser.js';
import func from '../parsers/exampleFunction.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = jsonParser(filepath1);
  const file2 = jsonParser(filepath2);
  const ans = func(file1, file2);
  return ans;
};
export default genDiff;
