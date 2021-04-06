
/* Создать массив любых элементов. Получить случайный элемент из массива и вывести его в консоль. */


const anArr = [ 'It', 'is', 'sping', 'outside', 'the', 'window'];


const aValue = Math.floor(Math.random() * anArr.length);
const randomResult = anArr[aValue];

console.log(randomResult);


