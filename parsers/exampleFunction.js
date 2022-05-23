import _ from 'lodash';

const func = (object1, object2) => {
  const keys = _.union(_.keys(object1), _.keys(object2)).sort();

  const massiv = keys.flatMap((item) => {
    const value1 = object1[item];
    const value2 = object2[item];

    if (_.isObject(value1) && _.isObject(value2)) {
      return { item, children: func(value1, value2) };
    }
    if (_.has(object1, item) && !_.has(object2, item)) {
      return { item, values: value1, sign: '-' };
    }
    if (!_.has(object1, item) && _.has(object2, item)) {
      return { item, values: value2, sign: '+' };
    }
    if (_.has(object1, item) && _.has(object2, item)) {
      if (value1 === value2) {
        return { item, values: value1, sign: ' ' };
      }
      return [{ item, values: value2, sign: '+' }, { item, values: value1, sign: '-' }];
    } return 'Eror, file contains internal files';
  });
  return massiv;
};
export default func;
