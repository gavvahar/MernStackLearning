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


function abc(e, f)
{
  console.log(this, this.d, e, f);
}
var d = 100;
const bindABC = abc.bind({d1: 600}, 700);
bindABC();
bindABC(1300);

const applyABC = abc.apply({d1: 600}, [700]);
abc.call({d1: 600}, 700);