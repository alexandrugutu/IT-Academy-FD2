/*Создайте два промиса. 
Первый промис возвращает объект { name: "Anna" } через 2с, а второй промис возвращает объект {age: 16} через 3 с.
Получите результаты работы двух промисов, объедините свойства объектов и выведите в консоль. Используйте Promise.all.*/

const objPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ name: "Anna" });
    }, 2000);
});
const agePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({age: 16});
    }, 3000);
});

const wrapper = Promise.all([objPromise, agePromise]).then(result => {console.log(result[0].name + result[1].age)} );
console.log(wrapper);
