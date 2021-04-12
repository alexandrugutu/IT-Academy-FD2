
/*Создать двумерный массив:
1 2 3
4 5 6
7 8 9
Вывести его в консоль. Преобразовать массив одномерный и снова вывести в консоль*/

const twoDimensArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(twoDimensArr);

const unidimensArr = twoDimensArr.flat();
console.log(unidimensArr);