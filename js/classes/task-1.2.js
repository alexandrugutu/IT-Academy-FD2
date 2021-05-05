/*Реализовать две оставшиеся иерархии в виде классов(которые вы не делали в классе).Придумать для каждого класса по 1 - 2 уникальных свойств, 
1 - 2 методов(методы можно не сильно реализовывать, а просто выводить что - то в консоль - лог внутри, чтобы знать, 
что он вызвался в какой - то момент) 
https: //docs.google.com/document/d/1gre7iEn1Iq-rstFlDrltCXxZvxaLlVtA8xtJmhzAjkA/edit?usp=sharing*/

class Shape {
    constructor(mold) {
        this.mold = mold;
    }
    haveMold() {
        return `My mold is ${this.mold}`;
    }
}
class Circle extends Shape {
    constructor(fill) {
        super('circle');
        this.fill = fill;
    }
}
class Rectangle extends Shape {
    constructor(name, angle) {
        super('Rectangle');
        this.name = name;
        this.angle = angle;
    }
    haveAngle() {
        return `Check angle is ${this.angle}`;
    }
}
class Polygon extends Shape {
    constructor(angleCount) {
        super('Polygon');
        this.angleCount = angleCount;
    }
    haveAngleCount() {
        return `I have ${this.angleCount} angles`;
    }
}

class FilledCircle extends Circle {
    constructor(color) {
        super('complete');
        this.color = color;
    }

    haveFill() {
        return `My fill color is ${this.fill}`;
    }
}

class Square extends Polygon {
    constructor(name) {
        super(6);
        this.name = name;
    }
}

class FilledPolygon extends Polygon {
    constructor(name, fill) {
        super(3);
        this.name = name;
        this.fill = fill;
    }
    haveFill() {
        return `My fill color is ${this.fill}`;
    }
}

class RadiusCircle extends FilledCircle {
    constructor(radius) {
        super('yellow');
        this.radius = radius; 
    }

    checkSize() {
        return `Circle with ${this.size} radius`;
    }
}

const wheelsRad = new RadiusCircle(30);
console.log(wheelsRad);
const onlyRectangle = new Rectangle('Book', 90);
console.log(onlyRectangle);
const keyboardButton = new Square('keyboard', 'buttons');
console.log(keyboardButton);
const frame = new FilledPolygon('Brickle frame', 'blue');
console.log(frame);