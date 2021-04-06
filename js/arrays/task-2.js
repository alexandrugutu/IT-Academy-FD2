/*Создать массив любых элементов.
Добавить элемент в конец массива, модифицировать созданный массив.
Добавить элемент в конец массива, создав новый массив на основе предыдущего модифицированного.
Выведите массивы в консоль */

const anyDigitarr = [2, 'á' ,5 ,7 ,9 ,10 ,null];

anyDigitarr.push('grapes');
console.log(anyDigitarr);

anyDigitarr.reverse();
console.log(anyDigitarr);


const anyDigitarrCopy = [...anyDigitarr];
console.log(anyDigitarrCopy);