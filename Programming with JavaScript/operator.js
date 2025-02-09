var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);


var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


var num = 10; // the value on the right is assigned to the variable name on the left
5 > 4 > 3; // the 5 > 4 is evaluated first (to `true`), then true > 3 is evaluated to `false`, because the `true` value is coerced to `1`

var score = 8
console.log("Mid-level skills:", score > 0 && score < 10)


var timeReamaining = 0;
var energy = 10;
console.log("Game over:", timeReamaining == 0 || energy == 0)


var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now+three+d);