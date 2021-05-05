/*Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения. Обработайте даное исключение, используя catch.
Обратите внимание, что метод print при этом не выполняется.*/

const timePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('My name is');
    }, 1000);
});

function onSuccess(param) {
    throw 'error';
};

function print(param) {
    return console.log(param);
};

timePromise.then(onSuccess).then(print).catch(error => console.log(error));