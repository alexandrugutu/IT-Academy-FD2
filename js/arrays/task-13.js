/*Создать массив любых элементов.
На его основе получить новый массив – подмножество элементов оригинального массива начиная с индекса a и заканчивая индексом b.
Вывести массив в консоль.*/


const sentence = ['The', 'truth', 'remains', 'always', 'truth.'];

const newSentence = sentence.splice(2, 2, 'yesterday', 'today', 'and', 'forever is')

console.log(sentence);
console.log(newSentence);