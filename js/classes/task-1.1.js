/*Реализовать две оставшиеся иерархии в виде классов(которые вы не делали в классе).Придумать для каждого класса по 1 - 2 уникальных свойств, 
1 - 2 методов(методы можно не сильно реализовывать, а просто выводить что - то в консоль - лог внутри, чтобы знать, 
что он вызвался в какой - то момент) 
https: //docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing*/

class Transport {
    constructor(travel) {
        this.travel = travel;
    }
    travel() {
        return (`It travels!`);
    } 
}
class FairyTail extends Transport {
    constructor(travelWay) {
        super(true);
        this.travelWay = travelWay;
    }
    checkIfRealTransport(){
        return `It is only imagination. It can not transport people.`
    }
}
class Real extends Transport {
    constructor(travelWay) {
        super(true);
        this.travelWay = travelWay;
    }
    checkIfRealTransport(){
        return `It can accommodate people.`;
    }
}
class LandTransport extends Real {
    constructor(name, enginPower, maxSpeed) {
        super('on land');
        this.name = name;
        this.enginPower = enginPower;
        this.maxSpeed = maxSpeed;
    }
    checkEnginPower(){
        return `Vehicle power is ${this.enginPower} horse power(HP).`;
    }
}
class AirTransport extends Real {
    constructor(itCanFly) {
        super('in air');
        this.itCanFly = itCanFly;
    }
    checkIfCanFly(){
        if(this.itCanFly === true){
            return `It flies in the air!`;
        } else {
            return `It can\'t fly.`;
        }
    }
}

class Helicopters extends AirTransport {
    constructor(name, hover) {
        super(true);
        this.name = name;
        this.hover = hover;
    }
    checkHoverHeight() {
        return `Maintain stable hover ${this.hover} m above selected object`;
    }
}

class Airplanes extends AirTransport {
    constructor(name, speed) {
        super(true);
        this.name = name;
        this.speed = speed;
    }

    takeOff() {
        return `Accelerate on land then take off!`;
    }
}

class FairyTailOnLand extends FairyTail {
    constructor(name, needPutOn) {
        super('on land');
        this.name = name;
        this.needPutOn = needPutOn;
    }
    runFast() {
        return `Boots run fast ${this.needPutOn}.`;
    }
}
class FairyTailInAir extends FairyTail {
    constructor(name, glide) {
        super('in air');
        this.name = name;
        this.glide = glide;
    }
    airGlide() {
        return `${this.name} fling ${this.glide}`;
    }
}

const exoticCar = new LandTransport('Koenigsegg Agera R', 947, 439);
console.log(exoticCar);

const rescueHelicopter = new Helicopters('HH-65 Dolphin', 15);
console.log(rescueHelicopter);
console.log(rescueHelicopter.checkHoverHeight());
const agricultureHelicopter = new Helicopters('Bell 204 ', 25);
console.log(rescueHelicopter);


const civilAirplane = new Airplanes('Boeing 400', 988);
console.log(civilAirplane);
console.log(civilAirplane.takeOff());

const militaryAirplane = new Airplanes('Mirage 2000', 2336);
console.log(militaryAirplane);
console.log(militaryAirplane.takeOff());

const ivanTransport = new FairyTailOnLand('Speedy boots', 'feet');
console.log(ivanTransport.runFast());

const aladdinTransport = new FairyTailInAir('Air gliding carpet', 'fast');
console.log(aladdinTransport.airGlide());
