var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird);
console.log("Eagle1: ",eagle1);

console.log("Eagle1 has wings: ",eagle1.hasWings);
console.log("Eagle1 can fly: ",eagle1.canFly);
console.log("Eagle1 has feathers: ",eagle1.hasFeathers);

var eagle2 = Object.create(bird);
console.log("Eagle2 can fly: ",eagle2.canFly);

var peguin1 = Object.create(bird);
peguin1.canFly = false;
console.log("Peguin1 can fly: ",peguin1.canFly);
