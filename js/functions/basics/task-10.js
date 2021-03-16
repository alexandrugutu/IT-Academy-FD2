/*Решать как для браузера. Создайте функцию-конструктор Calculator, который создаёт объекты с четырьмя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
multiply() возвращает произведение введённых свойств.
history() возвращает историю вызванных функций при работе с объектом начиная с момента его создания.*/


function Calculator() {
    let viewHistory = [];

    this.read = function read() {
        this.firstOperant = +prompt('Enter your first operant');
        this.secondOperant = +('Enter your second operant');

        viewHistory.push(this.read.name);
    };

    this.sum = function sum() {
        viewHistory.push(this.sum.name);

        return +this.firstOperant + +this.secondOperant;
    };

    this.multiply = function multiply() {
        viewHistory.push(this.multiply.name);

        return +this.firstOperant * +this.secondOperant;
    };

    this.history = function history() {
        viewHistory.push(this.history.name);
        
        return viewHistory;
    };
    this.read();
} 
const calk = new Calculator();

calk.sum();
calk.multiply();
calk.multiply();
calk.sum();
calk.read();

console.log(calk.history());