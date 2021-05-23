const add = require("../add");
describe("Add Test cases", () => {
  it("add 2 numbers", () => {
    expect(add(2, 3)).toEqual(5);
  });
  it("add 2 numbers", () => {
    expect(add(0, 3)).toEqual(3);
  });
  it("add 2 numbers", () => {
    expect(add(2, '3')).toEqual('23');
  });
});