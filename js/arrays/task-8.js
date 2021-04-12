/* Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]. 
На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].

первая часть - отрицательные числа в том же порядке
вторая часть - нули
третья часть - положительные числа в том же порядке */

const initialArr = [3, 0, -1, 12, -2, -4, 0, 7, 2];

let vals = initialArr.filter((n, index, array) => {
    return n < 0;
}).concat(initialArr.filter((n, index, array) => {
    return n === 0;
})).concat(initialArr.filter((n, index, array) => {
    return n > 0;
}));

console.log(vals);