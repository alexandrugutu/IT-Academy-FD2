/*Создать виртуальную рыбку, которая имеет свои координаты(например, в аквариуме) по x, y и z, у нее есть цвет, 
размер, она двигается, кушает, может размножаться.
У неё должно быть приватное поле содержащее многообразие еды которое она ест.При попытке скормить рыбке что - то, 
она должна выбрать только то, что она может скушать.
Создать вторую рыбку используя существующий класс(без наследования от первой рыбки), которая кушает на один продукт больше, 
чем оригинальная рыбка.
Продумать дополнительные методы и их реализацию(тут надо всё сделать чтоб работало, а не просто консоль - логи), 
которые позволят управлять такой рыбкой.*/

class VirtualFish {
    #food = ['fish', 'plankton', 'larvae'];
    constructor(name, color, position) {
        this.name = name;
        this.color = color;
        this.position = position;
    }

    set food(value) {
        this.#food.push(value);
    }
    reproduce() {
        let name = `Fish ${this.name}`;
        let color = 'silver';
        const littleFish = new VirtualFish(name, color, this.position);
        return littleFish;
    }

    hasPosition(a, b, c) {
        return this.position = { x: a, y: b, z: c };
    }

    eat(food) {
        if (this.#food.includes(food)) {
            return 'It taste good!';
        } else {
            return 'I don\'t eat this. Give me other food.';
        }
    }
    
}
const fish1 = new VirtualFish('Jellyfish', 'grey', { x: 1, y: 2, z: 3 });
const fish2 = new VirtualFish('Salmon', 'golden-brown', { x: 3, y: 5, z: 4 });

// fish1.food = 'plankton';
// fish2.food = 'Salmon';

console.log(fish1.hasPosition(2, 2, 3));
console.log(fish1.eat('Jellyfish'));

console.log(fish2.eat('plankton'));
console.log(fish2.reproduce());
console.log(fish2);
