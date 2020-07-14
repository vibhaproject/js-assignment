//variable
var x = 5;
var y = 6;
var z = x + y;
console.log(z);

//let
 
{
let a = 1;
let b = 2;
let c = a + b;
console.log(c);
}
//console.log(z+a);    //here a is outside the block scope hence cannot be used here
//console.warn("one variable is outside the scope hence it is showing error");

//constant

const age = 12;
var num = 1;
var result = age + num;
console.log(result);
age = 15;
console.log(result);