import parse from "./parsers/parse.js";
import findDifferce from "./comparer/findDifference.js";

const genDiff = (filepath1, filepath2) => {
  const object1 = parse(filepath1);
  const object2 = parse(filepath2);

  const diff = findDifferce(object1, object2);
  return diff;
};

export default genDiff;
