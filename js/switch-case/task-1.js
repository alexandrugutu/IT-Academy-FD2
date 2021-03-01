/* Перепишите if..else используя оператор switch-case.
let message;
if (login === 'Вася') {
  message = 'Привет';
} else if (login === 'Директор') {
  message = 'Здравствуйте';
} else if (login === '') {
  message = 'Нет логина';
} else {
  message = '';
} */

let message;

switch (message){
    case 'Вася':{
        message = 'Привет';
        break;
    }
    case 'Директор':{
        message = 'Здравствуйте';
        break;
    }
    case '':{
        message = 'Нет логина';
        break;
    }
    default:{
        message = '';
        break;
    }
}
