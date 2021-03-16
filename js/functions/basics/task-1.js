/*Создать функцию, которая выводит в консоль строчку в формате 'символ - код'
для кодов в диапазоне 78000 - 78030(все пары в диапазоне).
Используйте String.prototype.fromCodePoint().*/

function symbolStr(startIndex, endIndex) {
    
    for (let i = startIndex; i <= endIndex; i++) {
        let codeSymbol = String.fromCodePoint(i);
        let result = `${codeSymbol} * ${i}`;
        console.log(result);
    }
}
symbolStr(78000, 78030);