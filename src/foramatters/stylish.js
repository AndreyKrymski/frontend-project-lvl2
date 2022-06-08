import _ from "lodash";

const tabSize = 2;
const tabSymbol = " ";

const stylish = (diff, level = 1) => {
  const stylishDiff = (tree, depth) => {
    if (!_.isUndefined(tree) && !_.isObject(tree)) {
      return `${tree}`;
    }

    const currentTab = tabSymbol.repeat(tabSize * depth);
    const closingBracketTab = tabSymbol.repeat(tabSize * depth - tabSize);

    const result = _.flatten([tree]).flatMap((branch) => {
      let props;

      if (_.isArray(branch)) {
        props = branch;
      } else if (
        !_.has(branch, "key") ||
        !_.has(branch, "value") ||
        !_.has(branch, "sign")
      ) {
        props = Object.keys(branch).map((key) => ({
          sign: " ",
          key,
          value: branch[key],
        }));
      } else {
        props = [branch];
      }

      const lines = props.map((prop) => {
        const currentValue = stylishDiff(prop["value"], depth + 2);
        return `${currentTab}${prop["sign"].replace(">", " ")} ${
          prop["key"]
        }: ${currentValue}`;
      });

      return lines;
    });

    return ["{", ...result, `${closingBracketTab}}`].join("\n");
  };

  return stylishDiff(diff, level);
};

export default stylish;
