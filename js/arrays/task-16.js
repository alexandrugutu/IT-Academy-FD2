/*Создать массив с дублями. 
Найти первый элемент, который дублируется. 
Заменить этот элемент и все его копии на символ '*'. Вывести массив в консоль.*/

const initialArr = [20, 40, 50, 40, 40, 80, 90, 30, 70, 40, 90];

const revealDupl = initialArr.findIndex((nr, index) => {
    return initialArr.slice(index +1).some(val => nr === val);
});

const duplicates = initialArr[revealDupl];

const withReplacedSiobol = initialArr.map(nr => nr === duplicates ? '*' : nr);

console.log(withReplacedSiobol);