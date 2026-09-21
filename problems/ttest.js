// const fs = require('fs');

// const data = fs.readFileSync("./test.json", 'utf-8');

// const people = JSON.parse(data)

// const data1 = [
//     {
//         ism: 'Ali',
//         yosh: 25,
//         shahar: 'Toshkent'
//     },
//     {
//         ism: 'Vali',
//         yosh: 30,
//         shahar: 'Samarqand'
//     }
// ]
// people.push(...data1)
// console.log(people)

// fs.writeFileSync(
//     './test.json',
//     JSON.stringify(people, null, 2)
// );


// let str = "I love JavaScript";

// let result = str.match(/Java(Script)/);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result.length);

// // Additional information:
// console.log(result.index);
// console.log(result.input);  


// let str = "I love JavaScript";

// let result = str.match(/HTML/);

// console.log(result);
// console.log(result.length); 



// let str = '<h1>Hello, world!</h1>';
// let regexp = /<(.*?)>/g;

// let matchAll = str.matchAll(regexp);

// console.log(matchAll);

// matchAll = Array.from(matchAll);

// let firstMatch = matchAll[0];
// console.log(firstMatch[0]);
// console.log(firstMatch[1]);
// console.log(firstMatch.index); 0
// console.log(firstMatch.input);


// async function fetchData(url) {
//     const data = await fetch(url);
//     const products = await data.json();
//     return products
// }

// const result = await fetchData("https://fakestoreapi.com/products");

// console.log(result)