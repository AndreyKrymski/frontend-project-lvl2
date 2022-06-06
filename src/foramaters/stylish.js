import _ from "lodash";

const tabSize = 2;
const tabSymbol = " ";

const stylish = (diff, level = 1) => {
  const stylishDiff = (tree, depth) => {
    if (!_.isUndefined(tree) && !_.isObject(tree)) {
      return `${tree}`;
    }

    const currentTab = tabSymbol.repeat(tabSize * depth);

    const result = _.flatten([tree]).reduce((acc, branch) => {
      let a = tree;
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

      return [...acc, ...lines];
    }, []);

    const b = [...result];

    return ["{", ...result, `${currentTab - tabSize}}`].join("\n");
  };

  return stylishDiff(diff, level);
};

export default stylish;
