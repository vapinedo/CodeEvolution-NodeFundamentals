// const math = require("./math");
// const sum = math.add(2,3);
// const sub = math.subtract(7,3);
// console.log("Sum is", sum);
// console.log("Subtract is", sub);

const { add, subtract } = require("./math");
const sum = add(2,3);
const sub = subtract(7,3);
console.log("Sum is", sum);
console.log("Subtract is", sub);
