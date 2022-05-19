import _ from 'lodash';
import func2 from './logicJson.js';

const func = (object1, object2) => {
  const keys = _.union(_.keys(object1), _.keys(object2));

  const massiv = keys.flatMap((item) => {
    const value1 = object1[item];
    const value2 = object2[item];
    const itemValue = (key, value, sign = ' ') => ` ${sign} ${key}: ${value}`;
    const positivSign = '+';
    const negativeSign = '-';

    if (_.has(object1, item) && !_.has(object2, item)) {
      return itemValue(item, value1, negativeSign);
    }
    if (!_.has(object1, item) && _.has(object2, item)) {
      return itemValue(item, value2, negativeSign);
    }
    if (_.has(object1, item) && _.has(object2, item)) {
      if (value1 === value2) {
        return itemValue(item, value1);
      }
      return [itemValue(item, value1, negativeSign), itemValue(item, value2, positivSign)];
    } return func(value1, value2);
  });
  return func2(massiv);
};
export default func;
