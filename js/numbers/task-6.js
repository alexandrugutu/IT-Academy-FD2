/* Даны переменные a и b. Проверьте, что a делится без остатка на b. 
Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
let a = 1.5;
let b = 1.8;
if (a/b.toFixed(3))
console.log(`Divided with remainder: ${a/b}`); else 
console.log("Делится с остатком");   */

let a;
let b;

function findRemainder (a, b) {
    let result = a / b;
    let reminder = a % b;
    if (result == 0) {
        console.log('Число ' + result + ' делится без остатвка');
    }
    else {
        console.log('Число НЕ делится без остатвка. Остаток = ' + reminder + '');
    }

    return;
}
findRemainder(17, 2);