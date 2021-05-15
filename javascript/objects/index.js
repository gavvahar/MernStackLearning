var a = {
  x: 10,
  y: 'test ....',
  obj: {
    w: 40,
    abc: function() {
      console.log("abc: ", this.w);
    }
  },
  z: true,
  dateObj: new Date(),
};
console.log(a);
var t =
{
  y:1967,
  c: 'Mustang Shelby GT500',
  obj:
  {
    b: 64,
    abc: function()
    {
      console.log(this.b);
    }
  },
  z: true,
  dateObj: new Date(),
};
console.log(t);