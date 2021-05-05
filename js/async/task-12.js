/*Создайте асинхронную функцию myFirstAsyncFunction, используя FD (Function Declaration). 
Функция должна принимать два параметра a и b и возвращать сумму a+b.
Выведите значение, которое вернет функция в консоль. Обработаете промис и выведите значение в консоль.*/

async function myFirstAsyncFunction(a, b) {
    return a + b;
}

console.log(myFirstAsyncFunction(1, 3));

myFirstAsyncFunction(1, 3).then(console.log);
