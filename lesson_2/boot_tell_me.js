let newColWidth = prompt('What is your coloumn width?')
let gridSp = prompt('What would you like to fit?')

sum = gridSp * 12 / newColWidth 

if(sum === 3 || sum === 4 || sum === 6 || sum === 8 || sum === 2 || sum === 9 || sum === 10 || sum === 10 || sum === 5){
    console.log(sum + ' This works check other');
}else{
    console.log('NUP');
    console.log(sum);
}

