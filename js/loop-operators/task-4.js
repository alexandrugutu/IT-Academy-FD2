/*Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
        x
       xxx
      xxxxx
     xxxxxxx
    xxxxxxxxx
       ...*/
let rows = 10;
for (let i = 0; i <= rows; i++) {
    console.log(' '.repeat(10-i) + 'x' .repeat(i+1+i));
}