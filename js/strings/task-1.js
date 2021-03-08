/*Объявите три переменных: hour, minute, second. Присвойте им следующие значения: 4, 35, 5.
Выведите в консоль время в формате 04:35:05. Используйте String.prototype.padStart().*/

let hour = '4';
let minute = '35';
let second = '5';

let clock = `The time is  ${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;

console.log(clock);