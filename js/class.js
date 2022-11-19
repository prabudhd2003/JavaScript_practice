class Car{                              //name of the class is always in capital
    constructor(color,speed){           //constructor accepts parameters
        this.color = color;             //after adding constructor we can add as many methods as we want
        this.speed = speed;
    }
    turboOn(){
        console.log("turbo is on!");
    }
}

const car1 = new Car("red", 120);
const  car2 = new Car("blue",140);
car1.turboOn();
console.log(car1.speed);
console.log(car2);