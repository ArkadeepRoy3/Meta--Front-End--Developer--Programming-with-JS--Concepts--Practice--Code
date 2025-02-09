// Switch Statement - this is a case when there are multiple conditions to be checked 
var place = "";

switch(place){
    case 'first':
        console.log("GOLD");
        break;
    case 'second':
        console.log("SILVER");
        break;
    case 'third':
        console.log("BRONZE");
        break;
    default: 
        console.log("NO MEDAL");
}

// if-else statement example 

var light = "red"
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the above if-else statement to switch statement

switch(light){
    case 'green':
        console.log("Drive");
        break;
    case 'yellow':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Stop");
        break;
    default:
        console.log("The light is not green, yellow or red");
        break;
}

//Exercise

// Are you old enough? 
var age = 10;
if (age >= 65){
    console.log("You get your income from your pension");
}else if (age < 65 && age >= 18){
    console.log("Each month you get a salary");
}else if (age < 18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical");
}


// Days of the week 
var day = "Sunday";
switch(day){
    case 'Monday':
        console.log("Do Something");
        break;
    case 'Tuesday':
        console.log("Do Something");
        break;
    case 'Wednesday':
        console.log("Do Something");
        break;
    case 'Thrusday':
        console.log("Do Something");
        break;
    case 'Friday':
        console.log("Do Something");
        break;
    case 'Saturday':
        console.log("Do Something");
        break;
    case 'Sunday':
        console.log("Do Something");
        break;
    default: 
        console.log("There is no such day");
        break;
}

// FOR loop
// Here 'i' is the iterator

for(var i = 1; i <= 3; i++){
    console.log(i);
}
console.log("GO!");

for(var i=10; i > 0; i--){
    console.log(i);
}
console.log("Happy New Year!");

// WHILE loop
// counter value should be declared before the loop

var counter = 3;
while (counter > 0){
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year!");


console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
console.log("\n")
var year = 2018;
while (year <= 2022){
    console.log(year);
    year = year + 1;
}

// Nested Loops

for(var week = 1; week <= 2; week++){
    for( var day = 1; day <= 5; day++){
        console.log("Week"+week+" Day"+day);
    }
}

// Exercise - Small multiplication table

for (var i = 0; i < 3; i++){
    for(var j = 0; j <= 10; j++){
        console.log(i+" times "+j+" equals:",i*j);
    }
}

// Division

for(var i = 100; i > 10; i = i - 10){
    for(var j = 10; j > 4; j = j - 5){
        console.log(i+" divided by"+j+" equals"+ i / j);
    }
}


var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


for(var i = 1; i <= 10; i++){
    if(i == 1){
        console.log("Gold medal");
    }else if(i == 2 ){
        console.log("Silver medal");
    }else if(i == 3){
        console.log("Bronze medal");
    }else{
        console.log(i);
    }
}


for(var i = 1; i <= 10; i++){
    switch(i){
        case 1:
            console.log("Gold medal");
            break;
        case 2:
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
            break;
        default:
            console.log(i);
            break;
    }
}