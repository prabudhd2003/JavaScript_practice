//the spread operator(...) allows us to pass all elements of the array without having to type them individually. 
let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

function showItinerary(place1, place2, place3){
    console.log("Vist "+ place1);
    console.log("Then vist "+ place2);
    console.log("Finish with a vist to "+ place3);
}

//showItinerary(top3[0],top3[1],top3[2]);
showItinerary(...top3);