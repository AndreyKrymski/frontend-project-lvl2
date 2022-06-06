import parse from "./parsers/parse.js";
import findDifferce from "./comparer/findDifference.js";
import stylish from "./foramaters/stylish.js";

const genDiff = (filepath1, filepath2) => {
  const object1 = parse(filepath1);
  const object2 = parse(filepath2);

  let differnce = findDifferce(object1, object2);

  let result = stylish(differnce);
  console.log(result);
};

export default genDiff;

genDiff("./__fixtures__/file1.json", "./__fixtures__/file2.json");
