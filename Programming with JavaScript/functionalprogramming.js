// functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function currencyConversion(amount, rate){
    return amount * rate;
}

currencyTwo = currencyConversion(currencyOne, exchangeRate);
console.log(currencyTwo);

//

function doubleIt(num) {
    return num * 2
}

function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(20));

console.log(doubleIt(10).toString());

function example(){
    console.log("line one");
    console.log("line two");
    console.log("line three");
}

example();


let counter = 3;
function example(){
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    example();
}

example();

//

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);
console.log(total);

// Object Oriented Programming

var virtualPet = {
    sleepy: true,
    nap: function(){}
}


//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())