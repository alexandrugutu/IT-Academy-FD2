/* Даны переменные a и b. Проверьте, что a делится без остатка на b. 
Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. */


function findRemainder(a, b) {
    const result = a / b;
    const reminder = a % b;
    if (reminder == 0) {
        return 'делится ' + result;
    }
    else {
        return 'Делится с остатком ' + reminder;
    }
}
console.log(findRemainder(13, 2));
