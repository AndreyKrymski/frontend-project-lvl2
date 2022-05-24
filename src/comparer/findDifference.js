import _ from "lodash";

const findDifferce = (object1, object2) => {
  const keys = Object.keys(object1).concat(Object.keys(object2));
  console.log(keys);
};

export default findDifferce;
