/*Создать массив с дублями элементов. 
На его основе создать новый массив уникальных элементов (удалить дубли). Вывести новый массив в консоль.*/

const fruits = ['pineapple', 'pear', 'pear', 'watermelon', 'lime', 'kiwi', 'kiwi'];

const NoDuplicatFruits = fruits.filter((value, index) => {
    return fruits.indexOf(value) === index;
});

console.log(NoDuplicatFruits);