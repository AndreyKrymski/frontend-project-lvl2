import _ from 'lodash';

const difference = (obj1, obj2) => {
  const union = _.union(_.keys(obj1), _.keys(obj2)).sort();

  const result = union.map((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];
    if (val1 === undefined) {
      return { key, action: 'add', value: val2 };
    }
    if (val2 === undefined) {
      return { key, action: 'delete', value: val1 };
    }
    if (_.isObject(val1) && _.isObject(val2)) {
      return { key, action: 'nested', children: difference(val1, val2) };
    }
    if (val1 === obj2[key]) {
      return { key, action: 'same', value: val1 };
    }
    return {
      key,
      action: 'different',
      oldValue: val1,
      value: val2,
    };
  });
  return result;
};
export default difference;
