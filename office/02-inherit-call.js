/*  
  1 原型链继承
  继承的实现基于构造函数+原型对象模式去创建对象，被继承方（父）中对象是基本类型则使用构造函数，是引用类型则使用原型对象模式。继承方（子）也一样，只不过其原型对象引用了被继承方的实例对象。
  在创建继承方的实例时，就会携带有被继承方的函数
*/

function Mom () {
  this.name = 'fang';
  this.sex = 'falmale'
}

Mom.prototype = {
  love: function (a) {
    console.log(this.name + ',我爱你' + a + ',' + this.sex)
  }
}

function Son () {
  this.name = '方', //会重写的哦
  this.habby = 'draw'
}

Son.prototype = new Mom();

var son = new Son();
// 方,我爱你love,falmale
// son.love('love')

/*  
  2 借用构造函数
  在子类的构造函数中调用父类构造函数实现继承，用到了apply()或者call
*/
function Animal (name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

function Cat () {
  Animal.call(this)
}

// 借调构造函数继承的时候还可以传递参数给父级/超类
function Dog () {
  Animal.call(this, 'yellow')
}

var ertong = new Cat();
ertong.colors.push('black')
var ertong2 = new Cat();
console.log(ertong.colors)
console.log(ertong2.colors)

var dog = new Dog()
console.log(dog.name)
