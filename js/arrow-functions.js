
//VANILLA JAVASCRIPT FUNCTION
function addTwoNumbers (a,b) {   //(a,b) are my paprameters the function is expecting when it runs
    //CODE BLOCK this is code that runs when called
    return a + b;   //return a + b to the console
}  
//now call the function and declare what is going to hold the answer
let sum =addTwoNumbers(4,7);   //run function with the numbers 4, and 7  so a=4, b =7 answer = sum
console.log(sum);    // write to the console my answer

//ARROW FUNCTION as above.
const addTwoNumbers2(a,b) => a + b;   // we need to declare when using arrow functions
let sum = addTwoNumbers2(4,7);
console.log(sum);

//Implicit Returns that only take 0 or 1 Parameter
const saySomething = message => console.log(message);
saySomething('Hello There'); // paramater passed to the message part of the function that logs it to console

//or this is with no parameters
const sayHello = () => console.log("hello"); //has to = parenthesis      
sayHello();

//returns multiple lines of code with arrow functions 
//must wrap everythign after return keyword in parenthesis..
 
const returnMultipleLines = () => (  // this is still a function see how need = parenthesis
    `
    <p>this is a multiline string use template literals
    another line
    </p>
    `
)  //end of function its wrapped in parentheis
console.log(returnMultipleLines);




