/* Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. 
Используйте IIFE. */

const a = 1;
const b = 1;

(function conc() {
    const result = `${a}${b};`;
    const message = `result = ${result}`;

    console.log(message);
})();