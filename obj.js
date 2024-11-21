//------------------ sum object values -------------------

// let salaries = {
//     "John" : 100,
//     "Pete": 300,
//     "Mary": 250
// }
// function sumSalaries(obj){
//     let sum = 0
//     for (const element of Object.values(obj)) {
//         sum += element
//     }
//     return sum
// }
// console.log(sumSalaries(salaries));

//--------------- sum values of obj
// let salaries = {
//     "John" : 100,
//     "Pete": 300,
//     "Mary": 250,
//     name: "jasur",
//     adress: "Ikrom"
// }

// function countNums(obj1){
//     let sum1 = 0
//     for (const item of Object.values(obj1)) {
//         if(Number(item)){
//             sum1++
//         }
//     }
//     return sum1
// }
// console.log(countNums(salaries));

//----------------------- freezing method -----------------

// let object = {
//     name: "Ali",
//     age: 30,
//     address: "Kamol.street"
// }
// Object.freeze(object)   // you can't change the keys and values of the object but you can change nested objects

// object.name = "Karim"
// console.log(object);

//------------------- nested objects in freezing -----------------
// let objects = {
//     name: "Ali",
//     age: 30,
//     address: "Kamol.street",
//     family:{
//         married: 'No',
//         typeofHome: "flat"
//     }
// }

// Object.freeze(objects)

// objects.name = "Vali"
// objects.family.married = "yes"
// objects.family.typeofHome = "detached"
// console.log(objects);

//-------------------- sealing mehtod ------------------ 

// let objects = {
//     name: "Ali",
//     age: 30,
//     address: "Kamol.street"
// }
// Object.seal(objects)

// objects.name = "Karim"
// objects.money = 4000
// delete objects.age
// console.log(objects);

//-------------------- call method -----------------

// let uzbekistanAirways = {
//   title: "O'zbekiston havo yo'llari",
//   code: "HY",
//   booking: [],
//   book: function (name, seatNum) {
//     return this.booking.push(
//       `${this.title}da ${name} ismli inson ${seatNum}-o'rindiqda uchayapti`
//     );
//   },
// };

// let turkishAirlines = {
//   title: "Turkiya havo yo'llari",
//   code: "TR",
//   booking: [],
// }

// uzbekistanAirways.book("Shuhrat", 1)

// let book = uzbekistanAirways.book;

// book.call(turkishAirlines, "Sabit Car", 2)

// console.log(turkishAirlines);

// let behruzbekAirways = {
//   title: "Behruzbekninki",
//   code: "BH",
//   booking: [],
// };

// book.call(behruzbekAirways, "Muhammadali", 2)

//--------------------- 