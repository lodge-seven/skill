/*  
  观察者模式：定义对象件的一种一对多的关系，当一个对象的状态发生改变时，所有依赖它的对象会得到通知
  对事件的发布/订阅，是松耦合的
  1 指定发布者
  2 发布者存放回调函数以便通知订阅
  3 发布时遍历，触发回调
*/
var event = {}
event.clietList = []; //发布者的缓存列表（应聘者列表）
// 订阅
event.listen = function (key, fn) {
  if (!this.clietList["'"+key+"'"]) {
    this.clietList["'"+key+"'"] = [];
  }
  console.log(this.clietList)
  this.clietList["'"+key+"'"].push(fn)
}
// 触发
event.trigger = function () {
  // 参数不知道有多少，所以不能传参调用，只有在argument中用数组的方法找第一个参数
  var key = [].shift.call(arguments),
      fns = this.clietList["'"+key+"'"];
  console.log(key)
  for(var i = 0; i < fns.length; i++) {
    var fn = fns[i];
    fn.apply(this, arguments)
  }
}
// 取消订阅
event.remove = function(key, fn) {
  var fns = this.clietList["'"+key+"'"];
  if (!fns) {
      return false;
  }
  if (!fn) { //如果没有传入fn回调函数，直接取消key对应消息的所有订阅
      this.clietList["'"+key+"'"] = [];
  } else {
      for (var i = 0; i < fns.length; i++) { //遍历回调函数列表
        var _fn = fns[i];
        if (_fn === fn) {
            fns.splice(i, 1); //删除订阅者的回调函数
        }
      }
  }
};

event.listen('evet', f1 = function(time, name) { //某人订阅了这个消息
  console.log('正式上班时间：' + time + 'name:' + name);
});
event.listen('evet', f2 = function(time) { //某人订阅了这个消息
  console.log('正式上班时间：' + time);
});
event.remove('evet');
event.listen('join', function(time, name) { //某人订阅了这个消息
  console.log('正式上班时间：' + time + 'name:' + name);
});

event.trigger('evet', '2016/10');
event.trigger('join', '2016/10', '小小');