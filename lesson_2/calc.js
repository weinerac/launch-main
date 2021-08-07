const  readline = require('readline-sync');

let yesNo = '1';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invaidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));


}
while (yesNo === '1') {
  yesNo = 0;
  prompt("Welcome to Calculator!");

  prompt("What's the first number?");
  let num1 = readline.question();

  while (invaidNumber(num1)) {
    prompt("Invaild number try again");
    num1 = readline.question();
  }

  prompt("What's the second number?");
  let num2 = readline.question();

  while (invaidNumber(num2)) {
    prompt("Invaid number try again");
    num2 = readline.question();
  }
  prompt("What operation would you like to perform?\n1) Add 2) Subtracy 3) Mulitply 4) Divide 5)");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("Must choose 1, 2, 3 or 4");
    operation = readline.question();
  }
  let output;
  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

  console.log(output);
  prompt('Press (1) to go again, any other key to quit');
  yesNo = readline.question();
}
