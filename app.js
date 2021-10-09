const _ = require('lodash');

const item = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(item);

console.log(newItems);
console.log("hello Linux again");