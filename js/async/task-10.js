/* Используйте предыдущее задание. 
Пусть теперь второй промис переходит в состояние rejected со значением "Promise Error".
Измените код, чтобы обработать эту ситуацию. Используйте Promise.allSettled */

const objPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ name: "Anna" });
    }, 2000);
});
const agePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({age: 16});
    }, 3000);

    setTimeout(() => {
        reject("Promise Error");
    }, 1000);
});

const aaa = Promise.allSettled([objPromise, agePromise]).then(value => value).then(console.log);