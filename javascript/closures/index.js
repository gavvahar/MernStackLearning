function abc() {
  var  a = 10;
  var xyz = function() {
    console.log(a);
  }
  return xyz;
}

var z = abc();
z();