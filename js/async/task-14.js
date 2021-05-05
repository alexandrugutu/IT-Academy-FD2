/*Создайте масив урлов ['http://a', 'http://b']. Создайте функцию sendRequest, которая принимает один параметр - url. 
Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called' 
и возвращать через 2 с для первого урла объект { name: 'Ann' }, а для второго урла объект { age: 16 }. 
Создайте асинхронную функцию myThirdAsyncFunction которая должна вызвать функцию sendRequest для каждого урла 
и вернуть объект {name: 'Ann', age: 16}.
Обработайте результат работы функции myThirdAsyncFunction.*/

const urlArr = ['http://a', 'http://b'];

async function myThirdAsyncFunction() {
    
    function sendRequest(url) {
        console.log('sendRequest is called');

        return new Promise((res, rej) => {
            setTimeout(() => {
                
                if(url ==='http://a') {
                    res ({ name: "Anna" }); 
                } else if(url ==='http://b') {
                    res ({ age: 16}); 
                }
            }, 2000);
        })
    }

    const callup = urlArr.map(url => sendRequest(url))
    return await Promise.all(callup).then(value => Object.assign(value[0], value[1]));
}

myThirdAsyncFunction().then(console.log);






// const someUrls = ['http://a', 'http://b'];
// async function myThirdAsyncFunction() {
//     function sendRequest(url) {
//         console.log('sendRequest is called');
        
//         return new Promise((resolve, _) => setTimeout(() => {
//             if (url === 'http://a') {
//                 resolve( { name: 'Ann' } );
//             } else if (url === 'http://b') {
//                 resolve( { age: 16 } );
//             }
//         }, 2000));
//     }


//     const copyUrls = someUrls.map(url => sendRequest(url))
//     return await Promise.all(copyUrls).then(data => Object.assign(data[0], data[1]));
// }

// myThirdAsyncFunction().then(console.log);