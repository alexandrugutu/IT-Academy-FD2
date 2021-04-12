/*Создать отсортированный массив чисел. 
Реализовать функцию binarySearch(arr, value), 
которая принимает массив и значение и возвращает индекс значения в массиве или -1.
Функция должна использовать бинарный поиск. Вывести результат в консоль*/


const sortedArr = [50, 20, 80, 30, 10, 40, 100, 60, 70, 90].sort((a, b) => a - b);
// console.log(sortedArr);

function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);

        if (arr[middle] > value) {
            end = middle - 1;
        } else if (arr[middle] < value) {
            start = middle + 1;
        } else {
            return middle;
        }
        
    }
    return -1;
}
console.log(binarySearch(sortedArr, 20));
console.log(binarySearch(sortedArr, 90));