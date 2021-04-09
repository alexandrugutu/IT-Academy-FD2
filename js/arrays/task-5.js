/*Создать массив чисел в диапазоне от 0 до 100. 
Подсчитать и вывети сумму тех элементов, которые больше 50 */

const arrFromZeroToHundred = [...Array(101).keys()];
const greaterThanFifty= (item) => item > 50;
const summingUp = (sum, item) => sum + item;

const SumOfGreaterThanFifty = arrFromZeroToHundred.filter(greaterThanFifty).reduce(summingUp, 0);

console.log(SumOfGreaterThanFifty);
