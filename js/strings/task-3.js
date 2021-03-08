/*Объявите переменную и проинициализируйте ее строчным значением в переменном регистре 'ЯлЮбЛюJAVaScriPt'.
Напишите код, который преобразует эту строку к виду: первая буква в верхнем регистре, остальные буквы в нижнем регистре. Выведите результат работы в консоль.
Используйте String.prototype.toUpperCase(), String.prototype.toLowerCase(), String.prototype.slice().*/

// Method Nr.1
// let love = 'ЯлЮбЛюJAVaScriPt';
// console.log(love.slice(0, 1).toLocaleUpperCase() + love.slice(1, 16).toLocaleLowerCase());

// Method Nr.2
function changeCaseLetter (string){
    let low = string.slice(0, 1).toLocaleUpperCase();
    let up = string.slice(1, 16).toLocaleLowerCase();
    return console.log(`${low} ${up}`);
}
changeCaseLetter('ЯлЮбЛюJAVaScriPt');