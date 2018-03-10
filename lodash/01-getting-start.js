/*  
  js库，常见数据类型处理，要一个个看的话坑定啃不动
  延迟计算/惰性计算：资源最优，求值在执行时，不在绑定变量时。 绑定:(x = a) 执行:(x + 1)，在未执行之前，x,a延迟，即没有执行那么x = a就是不调用资源的无效代码
  lodash因为延迟计算而提升性能，延迟会使得内容合并，就能降低迭代次数
*/
var _ = require('lodash')

var firstMenu = [  
  { id: '1', '分组名称': '账户管理' },
  { id: '24', '分组名称': '其他' },
  { id: '23', '分组名称': '收银台管理' },
  { id: '22', '分组名称': '快递公司管理' },
  { id: '21', '分组名称': '服务号管理' },
  { id: '19', '分组名称': '消息管理' },
  { id: '18', '分组名称': '短信管理' },
  { id: '17', '分组名称': '图片管理' },
  { id: '16', '分组名称': '支付管理' },
  { id: '15', '分组名称': '商品评价管理' },
  { id: '14', '分组名称': '商品评价管理' },
  { id: '13', '分组名称': '店铺管理' },
  { id: '12', '分组名称': '售后管理' },
  { id: '11', '分组名称': '位置管理' },
  { id: '10', '分组名称': '商品列表管理' },
  { id: '9', '分组名称': '地址管理' },
  { id: '8', '分组名称': '权限管理' },
  { id: '7', '分组名称': '订单管理' },
  { id: '6', '分组名称': '提现管理' },
  { id: '5', '分组名称': '发现模块管理' },
  { id: '4', '分组名称': '日志管理' },
  { id: '3', '分组名称': '商品管理' },
  { id: '2', '分组名称': '个人资料管理' } 
  ]

/*  
  1 获取并分割分组名称
  chain 对象由lodash接手
  map 加工这个对象，只取出分组名称
  join 连接成一个字符串
  value 延迟计算必须，没有则获取不到数据，得到的是一个lodash对象
  filter 过滤，为真留下
  reject 过滤，为真去除
  find 条件查找
  要是按照传统做法，这里迭代了23+4
*/
var groupName = _.chain(firstMenu)
  .filter(function( item ){
    return item.id < 5
  })
  // .find({ id: '2' })
  .map(function( item ){
    return item.分组名称
  })
  .join(',')
  .value();

// 没有调用value()这个方法，不进入运算，获取的值是一个lodashweapper对象 
console.log('groupName', groupName)

/*  
  2 获取最小的id对应的数据
  min 条件最小
  sortBy 好像没什么卵用的排序
*/
var minId = _.chain(firstMenu)
  .min(function( item ) {
    return item.id
  })
  .value();
console.log('minId', minId)

var minId2 = _.chain(firstMenu)
  .sortBy( function ( item ) {
    console.log('map', item.id)
    return item.id
  })
  /* .map(function ( item ) {
    return item
  }) */
  // .first()
  .value();
console.log('minId2', minId2)

/*  
  数组转链
*/
var firstMenuObject = _.chain(firstMenu)
  .map(function ( item ) {
    return [item.分组名称]
  })
  .zipObject()
  .value();

// console.log('firstMenuObject', firstMenuObject)

