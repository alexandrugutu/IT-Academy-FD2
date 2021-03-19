/*Создать функцию-конструктор Tune(title, artist) для создания объектов с публичными свойствами title, artist и методом concat().
Метод должен возвращать конкатенацию значений свойств title и artist.
Создать несколько объектов. Вызвать их метод concat(). */

function Tune(title, artist) {
    this.title = title;
    this.artist = artist;

    this.concat = function () {
        return `${this.title} ${this.artist}`;
    }
}

const nationalMusic = new Tune('Ion Paladi', '- Bine-i sade mesei mele / Foaie verde');
const popMusic = new Tune('Ion Suruceanu', '- Amore Mio');

console.log(nationalMusic.concat());
console.log(popMusic.concat());