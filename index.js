const { sort, duplicates, contains, uniq, unionBy, cumSum, 
  unionBySumAt, factorial } = require('./rdash')

var items = [
  {key:'key1', value : 10},
  {key:'key2', value : 20},
  {key:'key2', value : 30},
  {key:'key1', value : 30},
  {key:'key3', value : 10}
]

var result = unionBySumAt(items,'key','value')
var another = 1;
var another = 2;
var another = 3;
var has_access = true;

console.log(result, factorial(4))
