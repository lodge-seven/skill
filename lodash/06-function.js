var _ = require('lodash');
function say(){
  return 'Say ' + this.what;
}

//使用bind绑定this
var sayHello = _.bind(say, {what: 'hello'});

//Say hello
// console.log(sayHello());

//也就是，这里的what变量既可以从this中获取，也可以从实参中获取
function sayWhat(what){
  //如果what没有定义
  if(_.isUndefined(what)){
      what = this.what;
  }

  return 'Say ' + what;
}

//绑定this
var sayHello = _.bind(sayWhat, {what: 'hello'});

//不绑定this,直接输入参数
var saySth = _.bind(sayWhat,{});

//Say hello
console.log(sayHello());

//Say haha
// console.log(saySth('haha'));