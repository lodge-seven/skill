// 引用类型是一个指针，指向一个地址，所有指向一个地址的变量在一个内存空间，是同一个值，由系统分配
function Person(){
}
var p1 = new Person();
p1.name = 'zhangsan';
p1.age = 30;
var p2 = p1; // 两个指向同一个地址

/* Person { name: 'zhangsan', age: 30 } */
// console.log(p2)

// 引用类型有object array regexp date function 特殊包装类型 string number boolean 单体内置对象global math
var p = {}
p.l = '123';
p.l = '1223';
var f = p;
// { l: '123' }
// console.log(f)

// 拷贝传值，栈里一大些都是，每个上下文不一样，还可以被顶包,调用完就完了
var a = 1;
a = 2;
function ab(num) {
  num = 12;
  console.log(num)
}
// 因为是堆中 后进先出，所以这里的函数已经被替换了 指针指向的那个对象被替换了
ab(a)
// 1
// console.log(a)

// 不受上下文限制
var b = {};
b.j = '11';
function ab(num, value) {
  num.j = value;
  console.log('+',num)
}

ab(b, 14)
ab(b, 12)
ab(b, 15)
