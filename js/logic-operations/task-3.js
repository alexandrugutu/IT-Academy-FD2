/* Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
Если результат больше 5, выведите его в консоль, иначе умножьте его на 10 и выведите в консоль.
Данные для тестирования: 2, 5 и 3, 1. */


let a = 3,
    b = 1;

function conditions(a, b){
  result = a + b;
  if(result > 5){
    console.log(result);
  }
  else{
    console.log(result * 10);
  }
}
conditions(2, 5);
conditions(3, 1);