class Person{
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}
class Worker extends Person{
    constructor(name, age, energy, xp=0, hourlywage=10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlywage = hourlywage;
    }
    gotowork() {
        this.xp += 10;
    }
}

function intern() {
    var intern1 = new Worker("Bob", 21, 110, 0, 10);
    intern1.gotowork();
    return intern1;
}
console.log(intern());
function manager() {
    var manager1 = new Worker("Alice", 30, 120, 100, 30);
    manager1.doSomethingFun();
    return manager1;
}
console.log(manager());