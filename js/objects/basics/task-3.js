/*Создайте функцию getObjThis(), которая возвращает this. Создайте несколько объектов city1 и city2 по примеру предыдущего задания с методом getCityName.
Разве что в этом случае метод getCityName должен ссылаться на функцию getObjThis. Проверьте работу метода у обоих объектов. */

function getObjThis() {
    return this;
}

const city1 = {
    name: 'Paris',
    population: 2e6,
    getCityName: getObjThis,
};

const city2 = {
    name: 'Prague',
    population: 1.3e6,
    getCityName: getObjThis,
};

console.log(city1.getCityName());
console.log(city2.getCityName());