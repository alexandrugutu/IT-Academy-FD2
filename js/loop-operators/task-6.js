/*
Напишите цикл, который предлагает ввести число большее 100 (через prompt в браузере).
Если пользователь ввёл другое число – попросить ввести ещё раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, 
либо не нажмёт кнопку Cancel (Esc).
Предусматривать обработку нечисловых строк в этой задаче необязательно.
 */

let input;
do {
    input = +prompt('Enter a number greater then 100:', '');
} 
while (input && input < 100);