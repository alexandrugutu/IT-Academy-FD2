/*Для браузера. Создайте промис, который перейдет в состояние resolve через 5с и вернет строку 'Promise Data'. 
Создайте второй промис, который перейдет в состояние rejected по клику на кнопку. Добавьте обработчик для кнопки. 
Используя метод race организуйте отмену промиса.*/

const resPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Promise Data');
    }, 5000);
});

let rejectPromise;
const rejectBtn = document.querySelector('button');
rejectBtn.addEventListener('click', rejectOnClick);

const rejectOnClick = new Promise(function (resolve, reject) {
    return rejectPromise('Change to rejected state on click!');
});

Promise.race(resPromise, rejectPromise).then(console.log).catch(console.log);