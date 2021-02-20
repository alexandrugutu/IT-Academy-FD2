/* Объявите переменную a. Если значение переменной равно 0, выведите в консоль true, иначе false.
Проверьте, что будет появляться в консоли для значений 1, 0, -3. */

let a;
function conditions(a){
  if (a==0){
  console.log(true);
  }
  else {
  console.log(false);
  }
}

conditions(1);
conditions(0);
conditions(-3);