//the rest operator allows us to take items from an array and create a sub-array
let top7 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City",
    "New Delhi",
    "Old Delhi",
    "Bombay",
    "Kolkata"
];
const [] = top7;
const[first,second,third, ...secondvist] = top7;

console.log(secondvist);
console.log(top7);
console.log(first);

//rest in function
function addTaxToPrice(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate*item)
}
let shoppingCart = addTaxToPrice(1.1,46,89,35,79);
console.log(shoppingCart);
