//objects are collection of related properties where each property is represented as key
//value pair
var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding bussiness oppurtunities";
storeManager.greetings = "let's make some money";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}
storeManager.nextAchievment = "open new store!";
assistantManager.nextAchievment = "become store manager";

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;


console.log(house2);
console.log(assistantManager);
console.log(storeManager);