const grades = [70,65,80,76,71,82];
let gradesSum = 0;

for(i = 0; i < grades.length; i++){
    gradesSum = gradesSum + grades[i];
}
console.log(gradesSum / grades.length);

// Arrays
// Built-in methods:

// forEach() method

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index){
    console.log(`${index}. ${fruit}`);
}
fruits.forEach(appendIndex);
// Alternate code for the above

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

// filter() method:

const nums = [0,10,20,30,40,50];
const result = nums.filter( function(num){
    return num > 20;
})
console.log(result);

// map() method:

const result1 = [0,10,20,30,40,50].map( function(num){
    return num / 10;
})
console.log(result1);

//

const result3 = []
const drone = {
    speed: 100,
    color: "yellow"
}

const droneKeys = Object.keys(drone)
droneKeys.forEach( function(key){
    result3.push(key, drone[key]);
})

console.log(result3);

// maps

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

console.log(bestBoxers.get(2));

// sets

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// Example of rest and spread operator:

// spread operator to concatenate strings

const fruits1 = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruits1AndBerries = [...fruits1, ...berries];
console.log(fruits1AndBerries);

// join objects:

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

// using spread operator to add new items to an array without push() method

let veggies1 = ['onion', 'parsley'];
veggies1 = [...veggies1, 'tomato', 'garlic'];
console.log(veggies1);

// convert string to array using spread

const greetings = "Hello";
const arrayofChars = [...greetings];
console.log(arrayofChars);

// copy one object into another using spread 

const car1 = {
    speed: 200,
    color: "yellow"
}

const car2 = {...car1}

car1.speed = 201;

console.log(car1.speed, car2.speed);

// copy array into another array 

const fruits2 = ['apples', 'pears']
const fruits3 = [...fruits2]
fruits2.pop()
console.log(fruits2, "not", fruits3)
