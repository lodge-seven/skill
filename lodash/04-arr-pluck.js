var _ = require('lodash')
var collection = [
  {name: 'ab'},
  {name: 'abccccc'},
  {name: 'bb'},
  {name: 'c'},
  {p:'22', name: 'd'},
  true,
  1
];

var pluckResult = _.map(collection, 'name');
// [ 'a', 'b', 'c', 'd', undefined, undefined ]
// console.log(pluckResult)

var compactResult = _.compact(pluckResult);
// [ 'a', 'b', 'c', 'd' ]
// console.log(compactResult)

var letters = ['a', 'b'];
var result = [];
/*  
  循环两次，每一次的循环里在用过滤去得到想要的数据，并合并到一个新数组里。
*/
_.each(letters, function(letter){
  var filterResult = _.filter(compactResult, function(item){
     return _.startsWith(item.toLowerCase(), letter);
  });

   result = result.concat(filterResult);
});
// [ 'ab', 'abccccc', 'bb' ]
// console.log(result)

var collection = [
    {name: 'a'},
    {name: 'b'},
    {name: 'c'}
];

var s = _.every(collection, 'name');
// console.log(s)
if(s) {
  // console.log('nihao~')
}

var a = [1,2,4];
var b = [1];
var c = [1,3];

var a1 = _.union(a, b, c); // 并集
var a2 = _.intersection(a, b, c); // 交集
var a3 = _.xor(a, b); // 补集
// console.log(a1)
// console.log(a2)
// console.log(a3)