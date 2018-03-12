function Gf(name,bar){
  this.name = name;
  this.bar = bar;
  // 浪费资源 每次调用都是不同的实例
  /* this.sayWhat = function(){
    alert(this.name + "said:love you forever");
  } */
  // 这样就不会浪费
  this.sayWhat = sayWhat
}

function sayWhat(){
  alert(this.name + "said:love you forever");
}
var gf1 = new Gf("vivian","f");
/*
  Gf   prototype指向Gf即原型对象
*/
var gf2 = new Gf("vivian2","f");

function Gf2(){
  Gf2.prototype.name = "vivian";
  Gf2.prototype.bar = "c++";
  Gf2.prototype.sayWhat = function(){
    console.log(123)
  }
}
var gf3 = new Gf2();
// __proto__指向Gf2的原型，原型里有构造，构造指向Gf2
gf3.sayWhat();
var gf4 = new Gf2();