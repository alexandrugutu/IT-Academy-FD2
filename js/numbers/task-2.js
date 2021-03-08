/*Найдите квадратный корень из 999. Результат округлите до целых, до десятых, до сотых. */

// let value = Math.sqrt(999);
// let value = Math.sqrt(999) % 2 === 0;

// console.log("First Value : " + value);

// let a = Int(value);

// console.log("Second Value : " + a);

// let integer = parseInt(Math.sqrt(999), 10);

// console.log("First Value : " + integer);


const sqrNum = Math.sqrt(999);

console.log(`Round to integer number" +  ${sqrNum.toFixed(0)},

Round to one decimal place" +  ${sqrNum.toFixed(1)},

Rounding up the second decimal" +  ${sqrNum.toFixed(2)}`);