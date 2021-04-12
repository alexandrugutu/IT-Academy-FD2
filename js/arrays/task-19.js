/*Создать массив, который содержит строки и числа. Проверить, содержит ли массив только строки. 
Вывети результат в консоль */

const sentenceNr = ['Street', 10, 'apartment', 15];

let b = sentenceNr.includes(elem => typeof elem === 'string');

console.log(b);