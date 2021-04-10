/* Создайте объект заработных плат salary. Ключ - имя человека, значение - его зарплата. 
Выведите на экран зарплату Пети и Коли. */

/*Напишите функцию sum, которая бы работала следующим образом:
sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15  */

//Сам не знал как решить. Посмотрел ответ на learn javascript. 

function sum(a) {

    let result = a;

    function f(b) {
        result += b;
        return f;
    }

    f.toString = function () {
        return result;
    };

    return f;
}

console.log(sum(1)(2) + '');
console.log(sum(1)(2)(3) + '');
console.log(sum(6)(-1)(-2)(-3) + '');
console.log(sum(0)(1)(2)(3)(4)(5) + '');