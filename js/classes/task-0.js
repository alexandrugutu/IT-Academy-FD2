/*Реализовать две оставшиеся иерархии в виде классов(которые вы не делали в классе).Придумать для каждого класса по 1 - 2 уникальных свойств, 
1 - 2 методов(методы можно не сильно реализовывать, а просто выводить что - то в консоль - лог внутри, чтобы знать, 
что он вызвался в какой - то момент) 
https: //docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing*/

class Car {
    constructor(manufacture) {
        this.manufacture = manufacture;
    }
    drive() {
        console.log('I\'m driving');
    } 
}

class PassengerCar extends Car {
    #trunkVolume = 60;
    #currentFuelLevel =30;

    constructor(manufacture, quality='normal'){
        super(manufacture);
        this.quality = quality;
    }

    get fuelLevel() {
        return `In tank now ${this.#currentFuelLevel} litres of gas`;
    }
}

class Truck extends Car {
    #maxLoad = 10;
    #currentLoad = 7;
    constructor(manufacture){
        super(manufacture);
    }
    // constructor(model){
    //     super('Truck');
    //     this.model = model;
    // }
    get loadLevel() {
        return `Load level now ${this.#currentLoad} tone`;
    }
}
const p1 = new PassengerCar('honda');
console.log(p1.fuelLevel);
console.log(p1);

const t1 = new Truck('MAN');
console.log(t1);

class Vaz extends PassengerCar {
    constructor(quality){
        super('Vaz');
    }
}
const v1 = new Vaz('low');