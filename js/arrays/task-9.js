/*Создайте массив styles с элементами "Jazz", "Blues".

Добавьте в конец значение "Rock-n-Roll"
Замените предпоследнее значение с конца на "Classics". 
Удалите первый элемент из массива и выведите его в консоль
Добавьте в начало два элемента со значениями "Rap" и "Reggae"
Выведите массив в консоль. */

const abc = ["Jazz", "Blues"];

abc.push("Rock-n-Roll");

abc[abc.slice -2, 1] = "Classics";

const startElem = abc.shift();
console.log(startElem);

abc.unshift("Rap", "Reggae");

console.log(abc);