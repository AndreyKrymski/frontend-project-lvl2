import parse from "./parsers/parse.js";
import findDifferce from "./comparer/findDifference.js";
import formatDifference from "./foramatters/formatDifference.js";

const genDiff = (filepath1, filepath2, format = "stylish") => {
  const object1 = parse(filepath1);
  const object2 = parse(filepath2);

  const differnce = findDifferce(object1, object2);
  const result = formatDifference(differnce, format);

  return result;
};

export default genDiff;
