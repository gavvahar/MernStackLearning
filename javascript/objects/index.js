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