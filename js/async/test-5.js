/* Для браузера. Создайте литерал объекта handlePromise со следующими свойствами: 
promise, resolve, reject, onSuccess, onError.
Проинициализируйте первые три свойства null, а последние два функциями, которые принимают один параметр и выводят в консоль сообщения:
первая - Promise is resolved with data: ${paramName}
вторая - Promise is rejected with error: ${paramName}
Создайте три кнопки и три обработчика события click для этих кнопок.
Первый обработчик, создает промис, заполняет первые три свойства, описаного выше объекта:
свойство promise получает новый созданный промис,
свойства resolve и reject получают ссылки на соответствующие функции resolve и reject.
Следующие два обработчика запускают методы resolve и reject. */

const handlePromise = {
    promise: null, resolve: null, reject: null,

    onSuccess: function (paramName) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },

    onError: function (paramName) {
        console.log(`Promise is rejected with error: ${paramName}`);
    }
};

const btnCreatePromise = document.querySelector('.btn-create-promise');
const btnResolve = document.querySelector('.btn-resolve');
const btnReject = document.querySelector('.btn-reject');

function newCreatePromise() {
    const promise = new Promise(function (resolve, reject) {
        handlePromise.promise = promise;
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    });
    promise.then(handlePromise.onSuccess);
    promise.catch(handlePromise.onError);

    console.log(promise);
}

btnCreatePromise.addEventListener('click', newCreatePromise);
btnResolve.addEventListener('click', () => handlePromise.resolve);
btnReject.addEventListener('click', () => handlePromise.reject);