/* Напишите функцию randomInRange которая принимает два параметра - начало и конец промежутка, 
в котором искать случайное значение.
Функция должна каждый раз возвращать новое случайное число. */

function randomInRange(begin, end){
    console.log (Math.random() * (end - begin) + begin);
}
console.log(randomInRange(5, 15));