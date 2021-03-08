// Дан массив numbers. Найдите среднее арифметическое его элементов. 
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const numbers = [12, 15, 20, 25, 59, 79];

let mean;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum / numbers.length);