var _ = require('lodash');

function hello(greeting, person){
  // 是否是对象
  if(_.isPlainObject(greeting)){
    // console.log('111')
    person = greeting;
    // console.log(person)
    greeting = 'hi';
  }
  return greeting + ' ' + person.name;
}

// var a = hello('hello',{name:''});
var a1 = hello({name:'12121'});
// console.log(a)
// console.log(a1)

var operand1 = 2/0
    operand2 = 3,
    results = [];
    
_.forEach([operand1, operand2], function(op){
    // 无尽 
    if(_.isFinite(op)){
        results.push('结果无穷尽');
    } else {
        if(!_.isNumber(op) || _.isNaN(op)){
            results.push('结果不是数字');
        } else {
            results.push('结果不正确');
        }
    }
}); 

// console.log(results);

var _ = require('lodash');

var o = {
    a: function(){return 'hi'},
    b: []
};

//hi
// console.log(_.isFunction(o.a));

//false
// console.log(_.isFunction(o.b));

var o = {
  name: '',
  age:22
};

// 给对象添加字段，相同字段值重写
var a3 = _.assign(o, {occupation:'', name: '123'});
// console.log(a3)

// merge 合并两个数组
var o1 = {
  states: {running: 'off'},
  names: ['a','d']
};

var o2 = {
  states: {off: 'on'},
  names: ['c','d']
};

var result = _.merge(o1, o2);

//{ states: { running: 'off', off: 'on' },names: [ 'a', 'b', 'c', 'd' ] }
// console.log(result);

var o1 = {
  occupation: '',
  last:'sss',
  first:''
};

var result1 = _.sortBy(_.keys(o1));

//[ 'first', 'last', 'occupation' ]
// console.log(result1);

function format(label, value){
  return label + ': ' + value;
}

var o = {
  first: 'darren',
  last: 'ji',
  age:33
}
,result = '';

var pairsResult = _.map(o);

// [ 'darren', 'ji', 33 ]
// console.log(pairsResult);

var o1 = {
  name: 'a',
  occupation:'b'
},
o2 = {
  spcecialty: 'c',
  employer: 'd'
};

//pick对象的字段
var o2pick = _.pick(o2, 'spcecialty');
//{ spcecialty: 'c' }
// console.log(o2pick);

// 合并
var result = _.assign(o1, o2pick);
//{ name: 'a', occupation: 'b', spcecialty: 'c' }
// console.log(result);

