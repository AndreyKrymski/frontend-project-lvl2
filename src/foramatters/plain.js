import _ from "lodash";

const getStrungValue = (value) => {
  if (_.isObject(value)) {
    return "[complex value]";
  } else if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const getAddedText = (property, value) =>
  `Property '${property}' was added with value: ${getStrungValue(value)}`;

const getRemovedText = (property) => `Property '${property}' was removed`;

const getUpdatedText = (property, valueFrom, valueTo) =>
  `Property '${property}' was updated. From ${getStrungValue(
    valueFrom
  )} to ${getStrungValue(valueTo)}`;

const plain = (difference, path = "") => {
  const result = _.flatten([difference])
    .filter((branch) => branch.sign !== " ")
    .flatMap((branch) => {
      if (_.isArray(branch)) {
        return getUpdatedText(
          path ? `${path}.${branch[0]["key"]}` : branch[0]["key"],
          branch[0]["value"],
          branch[1]["value"]
        );
      } else if (branch.sign === "-") {
        return getRemovedText(
          path ? `${path}.${branch["key"]}` : branch["key"]
        );
      } else if (branch.sign === "+") {
        return getAddedText(
          path ? `${path}.${branch["key"]}` : branch["key"],
          branch["value"]
        );
      } else if (branch.sign === ">") {
        return plain(
          branch["value"],
          path ? `${path}.${branch["key"]}` : branch["key"]
        );
      }

      throw Error("Something went wrong!");
    });

  return result.join("\n");
};

export default plain;
