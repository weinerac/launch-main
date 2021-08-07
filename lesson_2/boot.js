let newColWidth = prompt('What is your coloumn width?');
let whatColwidth = prompt('What are you trying to fit in?');

let sum = newColWidth * whatColwidth / 12;

if (sum === 3 || sum === 4 || sum === 6 || sum === 8 || sum === 2) {
  console.log(sum + ' This works check other');
} else {
  console.log('NO NUP');
  console.log(sum);
}