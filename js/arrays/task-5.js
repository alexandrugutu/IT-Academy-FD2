/*Создать массив чисел в диапазоне от 0 до 100. 
Подсчитать и вывети сумму тех элементов, которые больше 50 */

const onlyNr = [];

for(let i = 0; i <= 100; i++) {
    onlyNr.push(i);
}

const sum = onlyNr.filter(elem => elem > 50).reduce((acc, a) => acc + a);

console.log(sum);