import parse from "./parsers/parse.js";
import findDifferce from "./comparer/findDifference.js";
import format from "./foramatters/format.js";

const genDiff = (filepath1, filepath2, type) => {
  const object1 = parse(filepath1);
  const object2 = parse(filepath2);

  const differnce = findDifferce(object1, object2);
  const result = format(differnce, type);
  console.log(result);
  //return result;
};

export default genDiff;

genDiff("./__fixtures__/file1.json", "./__fixtures__/file2.json", "plain");
