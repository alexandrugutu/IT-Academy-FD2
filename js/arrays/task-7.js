/* Создать массив 20 чисел с случайными значениями от 0 до 100. Отcортировать массив по возрастанию.
Вывести его в консоль.
Получить массив, отсортрованный в обратном порядке, и вывести его в консоль. */

const newArr = [];
const min = 0;
const max = 100;

for (let i = 1; i <= 20; i++) {
    let justRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    newArr.push(justRandom);
}

newArr.sort((a, b) => a - b);
console.log(newArr);
