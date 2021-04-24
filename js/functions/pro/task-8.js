
/*Memoization. Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле 
F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
Функция должна хранить те значения, которые она уже вычисляла.
Используя методы console.time(), console.timeEnd() или performance.now() 
определите время вычисления функции fibo и функции fiboMemo.*/

function fiboMemo() {
    const placeHolder = {};

    return function fibo(nr){

        if(nr in placeHolder) {
            return placeHolder[nr];
        }

        if(nr===0){
            return 0;
        }

        if(nr===1){
            return 1;
        }
        
        const result = fibo(nr-1) + fibo(nr-2);
        placeHolder[nr] = result;

        return result;
    };
}
const fibonachi = fiboMemo();

console.time('fibonachi');
console.log(fibonachi(4));
console.timeEnd('fibonachi');

console.time('fibo');
console.log(fibonachi(4));
console.timeEnd('fibo');

console.time('fibonachi');
console.log(fibonachi(4));
console.timeEnd('fibonachi');