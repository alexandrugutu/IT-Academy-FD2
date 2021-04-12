/* Создать массив. Получить последний элемент массива. 
Без удаления этого элемента из массива. 
С удалением этого элемента из массива. 
Выведите массивы в консоль*/

const numInPosition = [1, 2, 3, 4];

const lastDigitWithoutDeletion = numInPosition[numInPosition.length -1];

console.log(lastDigitWithoutDeletion);
console.log(numInPosition);

const lastDigitWithDeletion = numInPosition.pop();

console.log(numInPosition);