var _ = require('lodash')
// compact 是去掉false的值

/*  
  从集合中找到满足name首字母是a或者b的数据
*/

var collection = [ {name: 'aa'}, 0, {name: 'bb'}, {name: 'bc'}, {name: 'bb'}, {name: 'bb'},null, {name:'cc'}, undefined, {name:''} ];
var letters = ['a', 'b'],//过滤条件
  compactResult = _.compact(collection),
  filterResult = [],
  result = [];

// console.log(compactResult)

//遍历打印
_.forEach(compactResult, function(item){
  // console.log(item.name);
});

//操作某个元素
_.each(letters, function(letter){
  // console.log(letter)
  // 条件过滤
  filterResult = _.filter(compactResult, function(item){
    // 循环 n*2次
    // console.log(item)
    // 首字母小写后是否首字母匹配
    return _.startsWith(item.name.toLowerCase(), letter);
  });

  /*  
    [ { name: 'aa' } ]
    [ { name: 'bb' }, { name: 'bc' }, { name: 'bb' }, { name: 'bb' } ]
  */
  // console.log(filterResult)
  //合并数组
  // 循环两次 每一次都是一个filterResult数组，因为是惰性计算，所以异步的得出值
  result = result.concat(filterResult);
  // 循环两次
  // console.log(result)
});
// result = result.concat(filterResult);
console.log(result);