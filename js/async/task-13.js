/*Cоздайте функцию makeRequest, используя FD (Function Declaration).
Функция должна принимать один параметр - url и возвращать промис, который перейдет в состояние resolved через 2с. 
и вернет значение параметра. Первой строкой в функции выведите сообщение 'makeRequest is called'.
Cоздайте функцию mySecondAsyncFunction, используя FD (Function Declaration).
Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.*/


async function mySecondAsyncFunction(url){
    
    function makeRequest() {
        console.log('makeRequest is called');

        return new Promise(function (resolve, _) {
            setTimeout(() => {
                resolve('Promise Data');
            }, 2000);
        });
    }
    return makeRequest(url);
}

mySecondAsyncFunction("https://yahoo.com").then(console.log);