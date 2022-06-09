import _ from "lodash";

const findDifferce = (object1, object2) => {
  const keys = _.union(_.keys(object1), _.keys(object2)).sort();

  let result = keys.map((key) => {
    let differnce;

    if (!_.has(object1, key)) {
      differnce = { sign: "+", key, value: object2[key] };
    } else if (!_.has(object2, key)) {
      differnce = { sign: "-", key, value: object1[key] };
    } else if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      differnce = {
        sign: ">",
        key,
        value: findDifferce(object1[key], object2[key]),
      };
    } else if (!_.isEqual(object1[key], object2[key])) {
      differnce = [
        { sign: "-", key, value: object1[key] },
        { sign: "+", key, value: object2[key] },
      ];
    } else {
      differnce = { sign: " ", key, value: object1[key] };
    }

    return differnce;
  });

  return result;
};

export default findDifferce;
