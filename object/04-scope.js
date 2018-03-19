function fn () {
  ++b;
  function s () {
    var a = 1
    console.log(a)
  }

  s()
}

fn()