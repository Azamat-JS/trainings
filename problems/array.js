// const arr = [2, 3, 4, 5, 6]
// const [a, b, c, d, e] = arr
// console.log(a);


// const restaurant = {
//     name: 'Rayhon Milliy Taomlar',
//     location: 'Tashkent',
//     categories: ['national', 'fast food', 'european cuisine', 'turkish'],
//     startMenu: ['somsa', 'lagman', 'salad', 'soup'],
//     mainMenu: ['osh', 'norin', 'manti']
// }

// const z = restaurant.categories[0];
// const x = restaurant.categories[2];

// console.log(z, x);


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

// const [starter, main] = restaurant.order(1, 0)

// console.log(starter, main)

// const arr = [2, 4, [5, 6]]

// const [i, j] = arr
// console.log(i, j)

// const [i, , [j, k]] = arr
// console.log(i, j, k)

// let Dec31_1969 = new Date(0);
// console.log(Dec31_1969);
// const today = new Date(2022, 1, 29, 10, 23)
// console.log(today.getFullYear())
// console.log(today.getMonth())
// console.log(today.getDate())
// console.log(today.getHours())
// console.log(today.getMinutes())
// console.log(today.getSeconds())

// console.log(today.toLocaleString('uz', {}))
// console.log(today.getTime())
// console.log(
//     today.toLocaleString('uz-UZ', {
//         dateStyle: 'short',
//         timeStyle: 'full'
//     })
// );

// console.log(
//     today.toLocaleString('uz-UZ', {
//         year: 'numeric',
//         month: 'long',
//         day: '2-digit',
//         weekday: 'short',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit'
//     })
// );

async function loadData() {
    console.time("loadData")

    const data = await fetch('https://fakestoreapi.com/products')
    console.timeEnd("loadData")
}

loadData()
