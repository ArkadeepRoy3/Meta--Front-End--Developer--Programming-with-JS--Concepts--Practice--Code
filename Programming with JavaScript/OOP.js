var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase1.totalPrice();

//

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase2.totalPrice();

//

var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase1.totalPrice();

var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:', calculation);
    }
}

purchase2.totalPrice();

// OOP Principles
// Inheritance

class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

// Encapsulation

"abc".toUpperCase(); //Encapsulation has to do with making a code implementation "hidden" from other users, in the sense that they don't have to know how my code works in order to "consume" the code.

/* Abstraction
Abstraction is all about writing code in a way that will make it more generalized.
*/


// Polymorphism
// Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".
const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

function ringTheBell(thing){
    console.log(thing.bell)
}

ringTheBell(bicycle);
ringTheBell(door);

console.log("abc".concat("def"));
console.log(["abc"].concat(["def"]));
console.log(["abc"]+["def"]);

// Here concat method shows polymorphism based on the data type used.

class Bird {
    useWings(){
        console.log("Flying!");
    }
}
class Eagle extends Bird{
    useWings(){
        super.useWings();
        console.log("Barely flapping!");
    }
}

class Penguin extends Bird{
    useWings(){
        console.log("Diving!");
    }
}

var baldEagle = new Eagle();
var kingPenguin = new Penguin();

baldEagle.useWings();
kingPenguin.useWings();


// Constructors

function Icecream(flavor){
    this.flavor = flavor;
    this.meltIt = function(){
        console.log(`This ${this.flavor} icecream has melted`);
    }
}

let appleIcecream = new Icecream("apple");
let bananaIcecream = new Icecream("Banana");

appleIcecream.meltIt();
bananaIcecream.meltIt();

//

var bird = {
    canFly: true,
    hasWings: true,
    hasFeathers: true
}

let eagle1 = Object.create(bird);
console.log("Eagle1 has feathers:", eagle1.hasFeathers);

let penguin = Object.create(bird);
penguin.canFly = false;
console.log("Penguins can fly:", penguin.canFly);


// Creating classes

class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights(){
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus(){
        console.log("Lights On?",this.lightsOn);
    }
    getSelf(){
        console.log(this);
    }
    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var myTrain1 = new Train('red',false);
console.log(myTrain1);

var myTrain2 = new Train('blue', false);
var myTrain3 = new Train('blue', false);

var myTrain4 = new Train('red', false);
myTrain4.toggleLights();
myTrain4.lightsStatus();
myTrain4.getSelf();
myTrain4.getPrototype();

//

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn){
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log("High Speed Status:", this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myTrain5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

myTrain5.toggleLights(); // undefined
myTrain5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

myTrain5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

//

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //


// Default parameters

function noDefaultParams(number) {
    console.log('Result:', number * number)
}

function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

//

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1){
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate(){
        if(this.bool1){
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect";
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6