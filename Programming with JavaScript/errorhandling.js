try{
    console.log(a + b);
}catch(err){
    console.log(err);
    console.log("There was an error");
    console.log("The error was saved in the error log");
}
console.log("My program does not stop");

// Types of Error:

// RefereceError
console.log(username);

// SyntaxError:
var a "there's no assignment operator here";

// TypeError:
"hello".pop() // Uncaught TypeError: "hello".pop is not a function

// RangeError:
(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36