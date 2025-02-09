function listArrayItems(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

var color = ['white','green','yellow','red','pink'];
listArrayItems(color);


//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// Example
function listArrayItems(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] == 'red'){
            console.log("Tomato");
        }
        else{
            console.log(i+1,array[i]);
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);


// Exercise 1

function letterFinder(word,match){
    for(var i = 0; i < word.length ; i++){
        if(word[i] == match)
        {
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log("---No match found at", i);
        }
    }
}
letterFinder("test","t");