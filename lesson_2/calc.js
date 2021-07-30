const  readline = require('readline-sync');
console.log("Welocme to Calculator");
console.log("What's the first number?");
let num1 = readline.question();
console.log("What's the second Number?");
let num2 = readline.question();
console.log("What operation would you like to perform?\n1) Add 2) Subtracy 3) Mulitply 4) Divide 5)");
let opertaion = readline.question();
let output;
if (opertaion === '1') {
  output = Number(num1) + Number(num2);
} else if ( opertaion === '2') {
  output = Number(num1) - Number(num2);
} else if (opertaion === '3') {
  output = Number(num1) * Number(num2);
} else {
  output = Number(num1) / Number(num2);
}
console.log(`${output}`);