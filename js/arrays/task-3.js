
/* Создать массив любых элементов. Вставить новый элемент под индексом 3.
Модифицировать текущий массив. Создать новый массив. Выведите массивы в консоль. */

const firstArr = [2, 3 ,5 ,7 ,9 ,10];


firstArr.splice(3, 0, 'abc');
// firstArr.sort();

firstArr.pop();

const secondArr = firstArr.map(elem => elem);

console.log(firstArr);
console.log(secondArr);

