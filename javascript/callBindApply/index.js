// bind
function xyz(b, c) {
  console.log(this, this.a, b, c);
}
var a = 10
const bindXYZ = xyz.bind({a1: 300}, 500);
bindXYZ();
bindXYZ(800);


//apply
const applyXYZ = xyz.apply({a1: 300}, [500]);
//call
xyz.call({a1: 300}, 500);