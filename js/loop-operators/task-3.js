/* Нарисуйте в консоле пирамиду на 9 уровней как показано ниже:
1
22
333
4444
...  */
let a=1
for (let x = 1; x <= 9; x++) {
    console.log(x * a);
    a=a+'1';
}

// var age=1;
// while ( age<4 ) {
// console.log( 'Мне ' + age + ' лет' );
// age++;
// }
// console.log('Всё, я большой!');


// for ( var age=1; age<5; age++ )
// console.log( 'Мне ' + age + ' лет' );
// console.log('Всё, я большой!');
// ------------------------------------------
// let rows = 5;
// for (let i = 1; i <= rows; i++) 
// {   for (let k = 1; k <= (rows-i); k++)
//     {
//         console.log("&nbsp;");
//     }
//     for (let j = 1; j <= i; j++)
//     {
//         console.log("*  ");
//     }
//     console.log("</br>");
// }