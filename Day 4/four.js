//window.prompt("Enter first number");
var first =Number(window.prompt("Enter first number"));
var second=Number(window.prompt("Enter second number"));
var operation=(window.prompt("Enter opertation"));

switch(operation)
{
    case '+' : console.log(first+second);
             break;
    case '-' : console.log(first-second);
                 break;
    case '*' : console.log(first*second);
                 break;
    case '/' : console.log(first/second);
                 break;
    case '%' : console.log(first%second);
                 break;

}