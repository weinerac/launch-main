const  readline = require('readline-sync');
const MESSAGES = require('./calc_message.json');
let LANGUAGE = 'en';

//Language Selector
prompt("chooseLang");
let choosenLang = readline.question();

if (choosenLang === '2') {
  LANGUAGE = 'es';
} else {
  LANGUAGE = 'en';
}
// Switch for go agin
let yesNo = '1';

// check for valid input
function invaidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}
// contols languge for all prompts??
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}
//Welcome mess
prompt('welcome');
let name = readline.question();

//Loop to check weather user wnats to go again
while (yesNo === '1') {
  yesNo = 0;


  prompt('number');
  let num1 = readline.question();

  while (invaidNumber(num1)) {
    prompt('validNumber');
    num1 = readline.question();
  }

  prompt('number');
  let num2 = readline.question();

  while (invaidNumber(num2)) {
    prompt("validNumber");
    num2 = readline.question();
  }
  prompt("WhatOp");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("mustChoose");
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
  console.log(`=> Thanks ${name} would you like to perform another?`);
  prompt("again");
  yesNo = readline.question();
}

console.log(MESSAGES);