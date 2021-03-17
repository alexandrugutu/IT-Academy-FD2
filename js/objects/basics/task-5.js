/*Создать функцию-конструктор Person() для конструирования объектов. 
Добавить два метода: setFirstName() и setLastName().
Методы должны вызываться в цепочке, например obj.setFirstName(...).setLastName(...) */

function Person() {

    this.setFirstName = function (name) {
        this.name = name;
        return this;
    };

    this.setLastName = function (lastName) {
        this.lastName = lastName;
        return this;
    };
}

const individual = new Person();

individual.setFirstName('Iosif').setLastName('Prekrasnyj');

console.log(`${individual.name} ${individual.lastName}`);