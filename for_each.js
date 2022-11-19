const fruits = ['apple','orange','kiwi','banana'];

function appendIndex(fruit,index){
    console.log(`${index}. ${fruit}`);
}

fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach(function(veggie,index){
    console.log(`${index}. ${veggie}`);
})