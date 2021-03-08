/*Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. 
Используйте String.prototype.includes(), String.prototype.indexOf()*/

function checking (a, b){
    let countSymbol = 0;
    let index = a.indexOf(b);
    while (index !== -1){
        countSymbol++;
        index = a.indexOf(b, index + b.length);
    }
    console.log(countSymbol > 1);
}
checking('Be kindly affected one to another with brotherly love', 'ly');



// function checking (aString, substring) {
//     let secontInstance = false;
//     let firstInstance = astring.indexOf(substring);
    
//     if (firstInstance !== -1){
//         let secontInstanceString = astring.slice(firstInstance + 1);
//         secontInstance = secontInstanceString.includes(substring);
//     }
//     console.log(secontInstance);
// }
// checking('Be kindly affected one to another with brotherly love', 'Be nice to each other');