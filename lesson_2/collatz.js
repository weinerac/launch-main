let num = 7;
let inz = 0;

for (i = inz; i < 1000; i++) {

  if (num % 2 === 0) {
    num /= 2;
    console.log(num);

  } else {
    num = num * 3 + 1;
    console.log(num);
  }
}
