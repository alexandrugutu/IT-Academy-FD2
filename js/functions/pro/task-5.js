/* Arguments Object, Rest.
Создайте функцию parts, которая принимает неизвестное количество параметров. 
Каждый параметр – это группа предложений.
Функция должна вырезать из параметра подстроку, начиная с символа двоеточие : 
и заканчивая символом точка ..
Функция должна возвращать массив подстрок. Используйте Function Definition Expression (FDE). 
Тестовые данные:
param1 = "This is the first sentence. This is a sentence with a list of items: 
cherries, oranges, apples, bananas."
param2 = "This is the second sentence. This is a sentence with a list of items: 
red, blue, yellow, black."
result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].
 */

let param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
let param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."

const undeterminNrParam = function(...residuaRestArgs) {
    let subSTR = [];
    for (let arg of residuaRestArgs) {
        subSTR.push(arg.slice((arg.indexOf(":") +0), arg.lastIndexOf(".") +1) );
    }
    return subSTR;
};

console.log(undeterminNrParam(param1, param2));