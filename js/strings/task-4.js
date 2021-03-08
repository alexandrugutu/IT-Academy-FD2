/* Напишите код, который выводит в консоль true, если строка str содержит 'discount' или 'low price',
а иначе false.
Тестовые данные: 'buy now, discount', 'buy now, dIscOUnt', 'take that, low price', 'low take that, prICE'.
Используйте String.prototype.includes(). */

function findTrue(x) {
    return x.includes('discount') || x.includes('low price');
}

console.log(findTrue('buy now, discount'));
console.log(findTrue('buy now, dIscOUnt'));
console.log(findTrue('take that, low price'));
console.log(findTrue('low take that, prICE'));