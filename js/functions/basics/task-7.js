/*Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]. 
Используя стрелочные функции создайте новый массив из элементов elem * elem,
которые меньше 100 и отсортируйте его по возрастанию. Выведите результат в консоль.*/

const arr = [1, 8, 3, 5, 12, 7, 9, 11];
const Arr = [];

for (elem of arr) {
    let newValue = elem * elem;

    const calcArrNew = newValue => {
        if (newValue < 100) {
            Arr.push(newValue);
        }
        return Arr;
    };
    calcArrNew(newValue);
}

const arrangeArray = (a, b) => a - b;
Arr.sort(arrangeArray);

console.log(Arr);