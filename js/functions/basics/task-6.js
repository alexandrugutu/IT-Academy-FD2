/* Объявите две строчные переменные: params и body и проинициализируйте их строчными значениями, 
которые представляют список параметров и тело будущей функции.
Создайте функцию, используя эту информацию с помощью Function Constructor (FC). Вызовите эту функцию. */

const params = 'x, y , z';
const body = 'return (x+y) * z';

const resultat = new Function(params, body);

console.log(resultat(2, 3, 2));
