/*Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
отдельно количество букв r, k, t и вывести в консоль*/


let values = 'dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh';

function findWords(values, index) {
    return values
    .split('')
    .filter(elem => elem === index)
    .length;
} 

console.log(findWords(values, 'r'));
console.log(findWords(values, 'k'));
console.log(findWords(values, 't'));