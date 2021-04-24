/*Создайте функции toConsoleLog, toConsoleError, toConsoleTrace, toConsoleTable с одним параметром.
Функции должна выводить значение параметра в консоль в соответствующем режиме.
Создайте функцию splitToWords с двумя параметрами: msg и callback.
Функция должна разделять строку на слова и использовать колбек для отображения слов.
Если второй параметр не задан, функция должна возвращать массив слов.*/

function toConsoleLog(alfa) {
    console.log(alfa);
}

function toConsoleError(alfa) {
    console.log(alfa);
}

function toConsoleTrace(alfa) {
    console.log(alfa);
}

function toConsoleTable(alfa) {
    console.log(alfa);
}

toConsoleTrace('Daniel');

const lookup = {
    name: 'Sharik',
    legs: 4,
    friends: 'everything',
};

toConsoleLog(lookup);

let sentence = 'How nice to see the sun is shining in the garden!';

function splitToWords(msg, callback) {
    if(callback) {
        return msg.split(' ').forEach(callback);
    } else {
        return msg.split(' ');
    }
};
function toConsoleTable(alfa) {
    console.log(alfa);
}
console.log(splitToWords(sentence));
console.log(splitToWords(sentence, toConsoleTable));
