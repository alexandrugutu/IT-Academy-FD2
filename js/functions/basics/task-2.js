/* Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой
и добавляет знак доллара перед числом в шаблонном литерале. */

let numberA = 10.252203;

function currency(strArr, numberA){
    return strArr[0] + '$' + numberA.toFixed(2);
}

console.log(currency `Price is ${numberA}`);