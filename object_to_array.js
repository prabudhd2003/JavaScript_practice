const result = [];

const car = {
    speed: 100,
    color: 'red'
}
const carKeys = Object.keys(car);

carKeys.forEach(function(key){
    result.push(key,car[key])
})
console.log(result)