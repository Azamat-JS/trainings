// function fn(a){
//     return function(b){
//         return [[a * 2, function() {return b * 2}]]
//     }
// }

// let [a, b] = fn(2)(3)[0]
// console.log(a + b());

// create a function named greet()
/*function greet() {
    console.log("Hello World!");
}

// store a function in the displayPI variable
// this is a function expression
let displayPI = function() {
    console.log("PI = 3.14");
}

// call the greet() function
greet();

// call the reply() function
displayPI();

// Output:
// Hello World!
// PI = 3.14

function java(){
    console.log("salom dunyo");
    
}

let script = function(){
    console.log("99893");
    
}

java()
script()*/

// function greet(name){
//     console.log(`Salom ${name}`);

// }

// greet("Abdulloh")

// function sum(a, b){
//     console.log((a / b) - 3);

// }

// sum(90, 3)

// function introduction(fullname){
//     console.log(`how is ${fullname}?`);

// }

// introduction("Kamol")

// let user = {
//   username: "Murodbek",
//   surname: "Ismoilov",
//   age: 16,
//   isMerried: true
// }

// user.username = "Behruzbek"
// user.id = "12"
// delete user.username

// console.log(user);

///////////////////////////////// dot notation
// console.log(user.isMerried);

/////////////////////////////////// bracket notation

// console.log(user["username"]);

// let str = "Salom"

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let superFantastikArray = [33, {name: "ali", obj: {arr: [44, "salom0", {o: 99}]}}]

// console.log(superFantastikArray[1].obj.arr[2].o);

// let f = ["red", {name: "ali", jet: {ted: ["green", 75, {etc: 99}]}}]

// console.log(f[1].jet.ted[2].etc);

// let arr1 = [1,2,3,4,5]
// for (let i = arr1.length-1; i >= 0 ; i--) {
// console.log(arr1[i]);
// }

///////////////// 2-masala

// let arr = [1, 4,2, 5, 1, 3, 2, 5]

// let newArr = []

// for (let i = 0; i < arr.length; i++) {
//  if(!newArr.includes(arr[i])) {
//   newArr.push(arr[i])
//  }
// }

// console.log(newArr);

//3
// let arr = [1,2,3,4,5,6,7,0, -1]
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] <= min){
//     min = arr[i]
//   }
// }
// console.log(min);

// let arr = [
//     {
//       age: "15a",
//       home: 1919,
//       name: "Sherzod",
//     },
//     {
//       age: 16,
//       home: 1299,
//       name: "Bekzod",
//     },
//     {
//       age: 18,
//       home: 1999,
//       name: "Umidjon",
//     },
//   ];
//   let s = 0;
//   for (let i = 0; i < arr.length; i++) {
//     s += arr[i].age;
//   }

//   console.log(s);

// let obj = {
//     name: "Azamat",
//     surname: "Abdullayev",
//     age: 28,
//     calcage: function(){
//         return 2024 - obj.age
//     }
// }

// console.log(obj.calcage());

// let obj = {
//     name: "Jasur",
//     surname: "Botirov",
//     age: 34,
//     street: "Ulug'bek",

// }
// obj.age = 23
// console.log(obj.age);

// const myArray = (a, b) => a - b

// console.log(myArray(2024, 1996));

// const person = {
//     age: 20,
//     name: "ben",
// }
// const peopleArray = (person, person, person);
// peopleArray[1].name = "joe"

// console.log(peopleArray[2].name);

// const person = {
//     name: "salom"

// }
// person.name = "alik"

// console.log(person);

// function normalizeNumber(numbers){
//  newArr = []
//  for (let i = 0; i < numbers.length; i++) {
//     newArr.push(Number(Math.abs(numbers[i]).toFixed(0)))

//  }
//  return newArr
// }
// const result = normalizeNumber([3.02, 7.89, -9.09, -8.77])
// console.log(result);

// let obj = {
//     name: "Usmon",
//     surname: "Nosir",
//     age : 65
// }

// for (let key in obj) {
//    console.log(`key: ${key}, value: ${obj[key]}`);

//      }

// function multiTask(num){
//     if (num === 0 || num === 1){
//         return 1
//     }
//     return num * multiTask(num-1)
// }

// const result = multiTask(6)
// console.log(result);

// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }
//     return n * factorial(n - 1)
// }
// const result = factorial(5)
// console.log(result);

// function checkNumber(str){
//     for (let i = 0; i < str.length; i++) {
//          if(str[i] > 10){
//                 return "true"
//             }
//             else if(str[i] > 10){
//                   return "true"
//             }
//         }
//         return "false"
//     }

// console.log(checkNumber("3, 10, 7, 90"));

// function createHelloWorld(args){

//      return
// }
// const f = createHelloWorld()
// console.log(f);

// function testSize (num){
//     if(num < 5){
//         return "tiny"
//     }
//     else if(num < 10){
//         return "small"
//     }else if(num < 15){
//         return "Medium"
//     }else if(num < 20){
//         return "large"
//     }else {
//         return "huge"
//     }
// }

// console.log( testSize(5));

// let names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "double bogey", "Go-home"]
// function golfScore(par, strokes){
//     if(strokes == 1){
//         return names[0]
//     }else if(strokes <= par - 2){
//         return names[1]
//     }else if(strokes == par - 1){
//         return names[2]
//     }else if(strokes == par){
//         return names[3]
//     }else if(strokes == par + 1){
//         return names[4]
//     } else if(strokes == par + 2){
//         return names[5]
//     } else if(strokes >= par + 3){
//         return names[6]
//     }
// }

// console.log(golfScore(2, 1));

// function caseInSwitch(val){
//     let answer = "";
//     switch(val){
//         case 0:
//             answer = "alpha"
//             break;
//             case 1:
//                 answer = "beta"
//                 break;
//                 case 2:
//                     answer = "gamma"
//                     break;
//                     case 3:
//                         answer = "gonna"
//                         break;
//                         default:
//                         answer = "stuff"
//                         break;
//     }
//      return answer
//     }

//     console.log(caseInSwitch(0));

// let str = "greeting"
// let newStr = ""
// for (let i = 0; i < str.length; i++) {

//     newStr += str[i] + str[i]

// }
// console.log(newStr);

// function logic(a, b){
//     for (let i = 0; i < b; i++) {
//         a()

//     }
// }
// function slow(){
//     console.log("often used");

// }
// logic(slow, 5)
// function bajarish(Callback){

//     console.log("bajarildi");
//     Callback();
// }

// bajarish(function(){
//     console.log("the nearest hotel");

// })

// function done(mannerisms) {
//     if (mannerisms === 0){
//         return "never"
//     }
//     mannerisms();
// }

// done(function(){
//     console.log("this is mannerisms");

// })

// function Automobile(mode, year, km, owner, condition){
//     this.mode = mode;
//     this.year = year;
//     this.km = km;
//     this.owner = owner
//     this.condition = condition
// }
// const vehicle = new Automobile("Toyota", 2020, "50.000 km", "Ben", "good")
// console.log(vehicle);

// function data(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return Math.abs(a - b + c * d)
//             }
//         }
//     }
// }
// console.log(data(11)(50)(1)(4));

// function outerFunction(x){
//     function innerFunction(y){
//         return x+y
//     }
//     return innerFunction
// }
// const closureExample = outerFunction(5)
// const result = closureExample(3)
// console.log(result);

// function outer(o){
//     function inner(p){
//         return o * p
//     }
//     return inner
// }

// const expert = outer(6)
// const result = expert(5)

// console.log(result);

// function repeat(fn, n){
// for (let i = 0; i < n; i++) {
//     fn()

// }
// }

// function greet(){
//     console.log("salom Yurtim");

// }
// repeat(greet, 3)

// function myFunc(arr, num){
//     let res = []
//     for(let i = 0; i < arr.length; i++)
//         if (arr[i] != num){
//             res.push(arr[i])
//         }
//       return res
// }

// console.log(myFunc([1, 2, 3], 1))

// function secondLargest(a){
//     let res = a.sort((a, b) => a - b)
//     return res[res.length - 2]
// }
// console.log(secondLargest([4, 6, 78, 90]));

//-------- nested function ------------

// function makeCounter(){
//     let count = 0

//     return function(){
//         return count++
//     }
// }

// let counter = makeCounter()

// console.log(counter());
// console.log(counter());
// console.log(counter());

//---------------- function class

// let sum = new Function('a', 'b', 'return a + b')
// console.log(sum(3, 6)); // 9

//-------------^^^^

// let sayGo = new Function('console.log("Go!")')
// sayGo()

//^^^^^^^^^^^^^^

// function getFunc(){
//     let value = 'test'
//     let func = function(){console.log(value)}
//     return func
// }
// getFunc()()

//   ^^^^^^^^^^^^^^^^^^

// types of syntax

// let sum1 = new Function('a', 'b', 'return a + b')
// console.log(sum1(4, 9));

// let multiply2 = new Function('a,b', 'return a * b')
// console.log(multiply2(4, 8));

// let substraction = new Function('a , b', 'return a - b')
// console.log(substraction(19, 8));



