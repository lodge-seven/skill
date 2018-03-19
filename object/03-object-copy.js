// 大吉大利今晚吃猫-工厂模型
function catFactory (name) {
  var cat = {};
  cat.name = name;
  cat.yell = function () {
    console.log(cat.name, '喵呜')
  }
  return cat;
}

var cat1 = catFactory('二筒');
var cat2 = catFactory('贡菊');
var cat3 = catFactory('绿茶');

cat1.yell();

cat2.yell();

cat3.yell();

cat1.yell();

// console.log(cat1.yell, cat2.yell, cat3.yell)