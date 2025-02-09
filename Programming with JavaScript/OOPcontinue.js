let {PI} = Math;
console.log(PI);

let {pi} = Math;
console.log(pi); // because lowercase pi doesn't exist in Math object.


// for loops and objects

// Object.keys();

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

// Object.values();

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries();

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

//

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem)){
    console.log(key, ":", clothingItem[key]);
}


//

function testBracketDynamicAccess(){
    var dynamicKey;
    if (Math.random() > 0.5){
        dynamicKey = "speed";
    }
    else{
        dynamicKey = "color";
    }

    var drone = {
        speed: 10,
        color: "orange"
    }
    console.log(drone[dynamicKey]); //sometimes the expression evaluates to drone["speed"], and other times that expression evaluates to drone["color"].
}

testBracketDynamicAccess();

//

const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

for (prop in sportsCar){ // for in is unreliable as it iterates over the object and its prototype;
    console.log(prop);
}

for (prop of Object.keys(sportsCar)){  // for of loop is reliable as it iterates over object's own property only;
    console.log(prop + ": " + sportsCar[prop]);
}

//

// Template literals

`Hello, World!`

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place}!`);

`Hello, 
World
!`