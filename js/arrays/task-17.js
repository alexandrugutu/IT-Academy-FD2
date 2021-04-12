/*Создать массив целых чисел.
На его основе создать массивы– представления этих же чисел в бинарном,
восьмеричном и шестнадцатеричном виде.Вывести эти массивы в консоль.*/

const nr = [20, 40, 50, 40, 40, 80, 90, 30, 70, 40, 90];

const transformToBinaryArr = nr.map(elem => elem.toString(2));
const transformToOctadecimalyArr = nr.map(elem => elem.toString(8));
const transformToHexadecimalArr = nr.map(elem => elem.toString(16));

console.log(transformToBinaryArr);
console.log(transformToOctadecimalyArr);
console.log(transformToHexadecimalArr);