/* Создайте промис, который переходит в состояние resolved через 3с. (Используйте setTimeout) и возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль */


// const timeoutPromise = Promise.resolve('Promise Data');

// setTimeout(console.log, 3000, timeoutPromise);

const timeoutPromise = new Promise ((resolve, _) => {
    setTimeout(() => {
        resolve('Promise Data');
    }, 3000);
});
timeoutPromise.then(console.log);