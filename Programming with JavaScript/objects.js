//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table);//display the object in the developer console

//Additionally, I can console log any individual property, like this:  

console.log(table.color); // 'brown'

//Using brackets notation for declaring values to the object

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}



var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//Array as objects

function arrayBuilder(first,second,third){
    var arr = [];
    arr.push(first);
    arr.push(second);
    arr.push(third);
    return arr;
}

var simplearr = arrayBuilder("apple","pear","banana");
console.log(simplearr);


var GoodBye = "Goodbye";

for(var i = 0; i<GoodBye.length; i++){
    console.log(GoodBye[i]);
}

//Exercise

var clothes = [];
clothes.push("Shorts");
clothes.push("BellBottom");
clothes.push("Shirt");
clothes.push("Tie");
clothes.push("Hoodie");
clothes.pop();
clothes.push("Jeans");
console.log(clothes[2]);
for(var i = 0; i < clothes.length; i++){
    console.log("Index is",i,"and value is",clothes[i]);
}

var favCar = {};
favCar.color = "Pink";
favCar.convertible = "True";
console.log(favCar);


//Object methods:

var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
console.log(car);
car.turnKey();


//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()


//typeOf

var test1 = typeof("test");
var test2 = typeof(123);
var test3 = typeof(function(){
    console.log("Hi");
})
var test4 = typeof(true);
var test5 = typeof(["1","2","3"])
var test6 = typeof({firstProp : 1});

console.log(test6)
