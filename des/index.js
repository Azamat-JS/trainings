// const arr = [1, 4, 2, 5]

// //Biz bir vaqtning o'zida barcha 4ta o'zgaruvchini e'lon qilishimiz mumkin
// const [a, b, c, d] = arr;

// console.log(a, b, c, d)

// const restaurant = {
//     name: 'Rayhon Milliy Taomlar',
//     location: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti']
// }

// const result = restaurant.categories[0];
// const res = restaurant.categories[1];

// console.log(res, result)

// const restaurant = {
//     name: 'Rayhon Milliy Taomlar',
//     location: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti'],

//     order: function (startMenuIndex, mainMenuIndex) {
//         return [this.startMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
//     }
// }

// const [starter, main] = restaurant.order(3, 1)

// console.log(starter, main)

// const arr = [2, 4, [5, 6]]

// // const [i, j] = arr
// // console.log(i, j)

// const [i, , [k]] = arr
// console.log(i, k)

// const [a, b, c = 5] = [8, 9, 10]
// console.log(a, b, c)

// const restaurant = {
//     location: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti'],
//     openingHours: {
//         mon: {
//             open: 8,
//             close: 22
//         },
//         tue: {
//             open: 8,
//             close: 23
//         },
//         wed: {
//             open: 9,
//             close: 21
//         },
//     },
//     order: function (startMenuIndex, mainMenuIndex) {
//         return [this.startMenu[startMenuIndex], this.mainMenu[mainMenuIndex]]
//     }
// }

// const { name: restaurantName, openingHours: { mon: { open, close } } } = restaurant;

// console.log(open, close);

// const year = new Date().toLocaleString('uz-UZ', {
//     weekday: "short",
//     day: "2-digit",
//     hour: "2-digit",
//     month: "long",
// })
// console.log(year)
// const today = new Date()
// today.setHours(0, 0, 0, 0);
// console.log(today);

// // let date = new Date();
// date.setDate(date.getDate() + 2);

// console.log(date);

// let date = new Date().getTime()
// console.log(date);



// async function measureTime() {
//     console.time('time')
//     const data = await fetch("https://fakestoreapi.com/products");
//     const products = await data.json();
//     console.timeEnd('time')
// }

// measureTime()

// function diffSubtract(date1, date2) {
//     return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//     return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }

// console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
// console.log('Time of diffGetTime: ' + bench(diffGetTime) + 'ms');

// function heavyTask() {
//     for (let i = 0; i < 1e7; i++) { }
// }

// let t1 = performance.now();
// heavyTask();
// let t2 = performance.now();

// console.log(`heavyTask ${(t2 - t1).toFixed(2)} ms vaqt oldi`);

// async function verify() {
//     setTimeout(() => {
//         console.log('ishladi')
//     }, 2000)
// }

// setInterval(() => {
//     console.log("Har 1 soniyada ishlayapti...");
// // }, 1000);
// const out = setTimeout(() => {
//     console.log('ishlamaydi')
// }, 2000);

// clearTimeout(out)

// verify();

// setImmediate(() => {
//     console.log("Call stack bo‘shagan zahoti ishlaydi");
// });

// setTimeout(() => console.log("Here is your pizza"), 3000);

// 1. Callback funksiya birinchi argument bo'lib keladi va uni birdan ishlatib yubormaydi
// 2. Second

// setTimeOut kodni o'qib kelganda to'xtatib qo'ymaydi, keyingi qatorga o'tib ketadi
// console.log("Waiting...")

// //With arguments:
// setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`), 3000, "cheese", "chicken");

// //Cancel timeout:
// const ingredients = ["cheese", "chicken"]
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1}, ${ing2}`), 3000, ...ingredients);

// if (ingredients.includes("cheese")) clearTimeout(pizzaTimer)

// setInterval(function () {
//     const now = new Date();

//     console.log(now);
// }, 1000);
const fs = require('fs')
const data = fs.readFileSync('./test.json', 'utf-8')
console.log(data)
const jsonStr = JSON.parse(data);
console.log(jsonStr);
