const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const snew = _.flattenDeep(items)
console.log(snew);
console.log("hello people");
