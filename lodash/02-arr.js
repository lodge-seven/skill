var _ = require('lodash')
var collection = {
  '账户管理': [  { '分组id': '1', '名称': '账户记录表', '英文名': 'm_account_record' } ],
  '个人资料管理': [  { '分组id': '2', '名称': '会员资料表', '英文名': 'm_memberinfo' },
    { '分组id': '1', '名称': '实名认证表', '英文名': 'm_identity_confirm' },
    { '分组id': '2', '名称': '二维码表', '英文名': 'm_qrcode_info' },
    { '分组id': '3', '名称': '微信信息表', '英文名': 'm_wechat_information' },
    { '分组id': '7', '名称': '银行卡类别表', '英文名': 'm_bank_card_category' },
    { '分组id': '4', '名称': '支付宝信息表', '英文名': 'm_alimessage' },
    { '分组id': '0', '名称': '银行卡名称表', '英文名': 'm_bank_card_name' } ],
  '身份管理': [
    {age: 12, 'name': 'xxx'},
    {age: 14, 'name': 'aaa'},
    {age: 2, 'name': 'bbb'},
    {age: 1, 'name': 'ccc'},
    {age: 35, 'name': 'ddd'},
    {age: 25, 'name': 'eee'}
  ]   
}

// 遍历
var nav =  _.forEach(collection, function(name, index){
  // console.log(index, name)
});
// console.log(nav)

// 根据字段分组
var group = _.groupBy(collection.个人资料管理, '名称');
/*  
  { '会员资料表': [ { '分组id': '2', '名称': '会员资料表', '英文名': 'm_memberinfo' } ],
  '实名认证表': [ { '分组id': '1', '名称': '实名认证表', '英文名': 'm_identity_confirm' } ],
  '二维码表': [ { '分组id': '2', '名称': '二维码表', '英文名': 'm_qrcode_info' } ],
  '微信信息表':
   [ { '分组id': '3', '名称': '微信信息表', '英文名': 'm_wechat_information' } ],
  '银行卡类别表':
   [ { '分组id': '7', '名称': '银行卡类别表', '英文名': 'm_bank_card_category' } ],
  '支付宝信息表': [ { '分组id': '4', '名称': '支付宝信息表', '英文名': 'm_alimessage' } ],
  '银行卡名称表': [ { '分组id': '0', '名称': '银行卡名称表', '英文名': 'm_bank_card_name' } ] }
*/
// console.log(group)

// 根据条件划分新的分组
var group2 = _.groupBy(collection.个人资料管理, function(item){
  return item.分组id > 4 ? '新的' : '旧的';
})
/*  
  { '旧的':
   [ { '分组id': '2', '名称': '会员资料表', '英文名': 'm_memberinfo' },
     { '分组id': '1', '名称': '实名认证表', '英文名': 'm_identity_confirm' },
     { '分组id': '2', '名称': '二维码表', '英文名': 'm_qrcode_info' },
     { '分组id': '3', '名称': '微信信息表', '英文名': 'm_wechat_information' },
     { '分组id': '4', '名称': '支付宝信息表', '英文名': 'm_alimessage' },
     { '分组id': '0', '名称': '银行卡名称表', '英文名': 'm_bank_card_name' } ],
  '新的':
   [ { '分组id': '7', '名称': '银行卡类别表', '英文名': 'm_bank_card_category' } ] }
*/
// console.log(group2)

var min = _.minBy(collection.身份管理,'age');
// { age: 1, name: 'ccc' }
// console.log(min)

var max = _.maxBy(collection.身份管理,function( item ) {
  // console.log(item)
  return item.age % 5
});
// { age: 14, name: 'aaa' }
// console.log(max)

// 拿到数组中第一个
var first = _.first(collection.个人资料管理);
// { '分组id': '2', '名称': '会员资料表', '英文名': 'm_memberinfo' }
// console.log(first)

// 取长度
var length = _.size(collection.个人资料管理);
// 7
// console.log(length)

// 字符串排序哦
var strSortResult = _.sortBy('cda').join(' ');
// console.log(strSortResult);

var arrSortResult = _.sortBy(collection.个人资料管理, function(item){
  // console.log(item)
  return item.分组id; // 排序依据
})

var arrSortResult2 = _.sortBy(collection.个人资料管理, ['英文名','分组id'])

// console.log(arrSortResult2)

var collection1 = ['a', 'b', 'c', 'd', 'f'];
// 这个值不管在不在数组里，都把它加到排序中去排序
var sortedIndex = _.sortedIndex(collection1, 'e');
// 在第n个位置插入值，不删除一个item
collection1.splice(sortedIndex, 0, 'e');
// console.log(collection)

var collection2=[
  {name: 'aa', enabled: false},
  {name:'bb', enabled:true}
];

// filter 筛选条件真
var result2 = _.filter(collection2, 'enabled');
_.forEach(result2, function(item){
  // { name: 'bb', enabled: true }
  // console.log(item);
});

// find 找到一个就返回结果
// var result2 = _.find(collection.个人资料管理,{ '分组id': '2' });

// take 从一个数组中拿取n数
var result2 =_.take(collection.个人资料管理, 4);
// console.log(result2)

// 看来是异步的 1毫秒后返回值
_.defer(function(text) {
  // console.log(text);
}, '你好');

// 最后的值
var arr = ['1', 'w']
var arrLatest = _.last(arr)
// console.log(arrLatest)

// 范围 从3开始到18为止
var s = _.range(0, 20, 3);
// [ 0, 3, 6, 9, 12, 15, 18 ]
// console.log(s)

function greet(greeting, name) {
  // console.log(111)
  // console.log('greeting:', greeting)
  // console.log('name:', name)
  return greeting + ' ' + name;
}

// 不晓得是用在什么地方
var greetFred2 = _.partial(greet, 'hello')
greetFred2('2')
_.defer(_.partial(greet, 'hello', '1213'))
// => 'hello fred'
 
// Partially applied with placeholders.
// _替代了hi
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'

// 把一个数组分割成多个数组
var chunk = _.chunk([1,2,3,4,5],2);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
// console.log(chunk)

var len2 = _.range(10),
    //向上取整 
    size = Math.ceil(0.25 * len2.length);
    arr = _.chunk(len2, size);
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] 3 [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ], [ 9 ] ]
// console.log(len2, size, arr)

// 数组平分
var len = _.range(1000)
chunks = _.chunk(len,50);//每一份50个，总共分为20份 [0-49]
// console.log(chunks) // [[0..49],[50...99]...]
// 无限递归
function process (chunks, index) {
  var chunk = chunks[index];
  // 值为underfined返回真 不可能一直循环 这个是结束的标志
  if(_.isUndefined(chunk)){
    return
  }

  //defer让堆栈上有足够的时间作清理，defer接受一个回调函数
  //partial让某个函数执行
  console.log('working ' + _.last(chunk)); // 得到数组里最后一个值 

  // _.partial(process, chunks, ++index) 这就递归了 无限调用 遇return停止
  _.defer(_.partial(process, chunks, ++index));
}

// process(chunks,0);
// 去重
var collection3 = ['','','1',1,2,2,2,3,'3'];
var collection3 = _.uniq(collection3);
// [ '', '1', 1, 2, 3, '3' ]
// console.log(collection3)

var foo = [
  {employer: 'a', employees: [{name:'b'},{name:'c'}]},
  {employer: 'd', employees: [{name:'e'},{name:'f'}]}
];

// map取代了pluck
var tempResult = _.map(foo, 'employees');
// [ [ { name: 'b' }, { name: 'c' } ], [ { name: 'e' }, { name: 'f' } ] ]
// console.log(tempResult);

// 去掉一个维的数数组
var employees = _.flatten(tempResult);
//[ { name: 'b' }, { name: 'c' }, { name: 'e' }, { name: 'f' } ]
// console.log(employees);

// 过滤这个数组
var result = _.filter(employees, function(item){
  return (/^[bx]/i).test(item.name);//找出name值以b或x开头的
});
console.log(result)
