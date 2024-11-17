  "use strict"

// function stars(n){
// let result = ""
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//    if(i === 0 || j === 0 || i === n - 1 || j === n - 1 || i + j >= n / 2 + 4){
//      result += " *"
    
//    }else{
//     result += "  "
//    }
    
//   }
//     result += "\n"
//   }
  
//   return result
// }

// console.log(stars(10));



// let sum = 0
// let n = 50

// for (let i = 1; i <= n; i++) {
//     sum += i;

// }
// console.log(`sum: ${sum}`);

// let obj = {
//   name: "ali",
//   age: 29,
//   nation: "uzbek",
// };

// console.log(Object.entries(obj));

// function secondLargest(a){
//     let res = a.sort((a, b) => a - b)
//     return res[res.length - 2]

// }
// console.log(secondLargest([5,6,54,65,3,13,5]));


// function getLength(arr){
//     let sum = 0
// for (const item of arr) {
//     if(Array.isArray(item)){
//       sum += getLength(item)
//     }else {
//         sum ++
//     }
// }
// return sum
// }
// console.log(getLength([34, 5,[55, 2,[[56]]]]));

// let arr = ["A", "B", "C", "B", true, true, false]

// function count(arr){
//     let obj = {}
//     for(const item of arr){
//         if(obj[item]){
//             obj[item] += 1
//         }else{
//             obj[item] = 1
//         }
//     }
//     return obj
// }
// console.log(count(arr));




////// slice

// console.log(arr.slice(0, 3));

/////////// splice

// arr.splice(0, 3, 98)
// console.log(arr);



//////////// reverse

// console.log(arr.reverse(arr));


///////// concat

// let arr2 = [12, 77, 88, 90, 9]

// let arr = [980, 98, 997, 90]

// let newArr = arr2.concat(arr)

// console.log(newArr);


//////////////////// join

// console.log(arr.join(" i "));


//////////////////// indexOf

// console.log(arr.indexOf(122));

//////// forEach

// arr.forEach((element, ind, multiply) => 
//     console.log(sample))

// arr.forEach(function (item){
//     console.log(item + 2);
    
// })

////////////// this

// function korsatish(){
//     console.log(this);
    
// }
//     korsatish()


// const Automobile = {
//     model: "Toyota",
//     year: 2000,
//     references: function(){
//         return `this ${this.model} is produced in ${this.year} `
//     }
// }
    
//     console.log(Automobile.references());
    

// function vehicle(brand, age){
//     this.brand = brand,
//     this.old = age
// }
// const newCar = new vehicle("Lada", 1998)
// console.log(newCar);

// function unit(name, position){
//     this.name = name,
//     this.position = position
// }

// const employee = new unit("Ben", "manager")
// console.log(employee);


////////////////////// call function

// let uzbAir = {
//     name: "Uzbspace",
//     code: "HY",
//     booking: [],
//     book: function(fullname, flightNumber){
//         return this.booking.push(`In ${this.name} a person called ${fullname} flies through ${flightNumber} - seat`)
//     }
// }
// uzbAir.book("shuhrat", 1)

// let turkishAirlines = {
//     name: "turkishairways",
//     code: "tr",
//     booking: [],
// }


// let book = uzbAir.book

// book.call(turkishAirlines, "Hadicha", 2)


// console.log(turkishAirlines);

//---------------------------------------------------

let aliRes = {
 food: "plov",
 drink: "tea",
 snack: "tomato",
 order(quantity, table){
    console.log(`you ordered ${quantity} ${this.food} with ${this.drink} and ${this.snack} to ${table}-table`)
 }
}
aliRes.order(1, 22)


let odilRes = {
    food: "cake",
    drink: "coffee",
    snack: "chocolate"
}

let order = aliRes.order

order.call(odilRes, 2, 10)

//////////// apply method

// book.apply(xorazm, ["Fred", 5])

// console.log(xorazm);


///////////// bind mehtod

// let newbind = book.bind(xorazm)

// newbind("Ali", 8)
// console.log(xorazm);


//////////// spread

// let arr = [980, 98, 997, 90]

//////////// without spread

// let newArr = [11, 44, 5, arr[0], arr[1], arr[2], arr[3]]
// console.log(newArr);


//////////////// with spraed

// let newArr = [3, 5, ...arr]
// console.log(newArr);

////////////// spread with string

// const str = "Azamat"
// const letters = [...str, "Teacher"]
// console.log(letters);


////////////////////////// with object

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti'],
// 	openingHours: {
// 		mon: {
// 			open: 8,
// 			close: 22
// 		},
// 		tue: {
// 			open: 8,
// 			close: 23
// 		},
// 		wed: {
// 			open: 9,
// 			close: 21
// 		},
// 	},
// }

// const newRestaurant = {...restaurant, owner: "Fred", opened: 2019}

// console.log(newRestaurant)


//////////////////////// with function

// let animals = ["lion", "snake", "coala"]

// function myFunc(animal1, animal2, animal3) {
//   return `${animal1}, ${animal2}, ${animal3}`
// }

// console.log(...animals);

// let floraAndFauna = ["roses", "bears", "tigers", "rabbits"]
// function myPets(pet1, pet2, pet3, pet4){
//   return pet1, pet2, pet3, pet4
// }
// console.log(...floraAndFauna);




/////////////////////////////// rest

/////////  with object2

// const restaurant = {
// 	name: 'Rayhon Milliy Taomlar',
// 	location: 'Tashkent',
// 	categories: ['national', 'fast food', 'european cuisine', 'turkish'],
// 	startMenu: ['somsa', 'lagman', 'salad', 'soup'],
// 	mainMenu: ['osh', 'norin', 'manti'],
// 	openingHours: {
// 		mon: {
// 			open: 8,
// 			close: 22
// 		},
// 		tue: {
// 			open: 8,
// 			close: 23
// 		},
// 		wed: {
// 			open: 9,
// 			close: 21
// 		},
// 	},
// }

// const copyRestaurant = {...restaurant}
// copyRestaurant.name = "Asia"
// copyRestaurant.location = "Urgench"

// const {sat,...MAINfood} = restaurant.mainMenu
// console.log(MAINfood);


/////////// REST with function

// const add = function(...numbers){
//   console.log(numbers);
  
// }

// add(2,3)
// add(5, 1, 2, 3)
// add(90, 87, 8, 9)