// let ourArray = ["stimpson", "j", "cat"];
// ourArray.shift();
// ourArray.unshift("happy")
// console.log(ourArray);

// let myArray = [["john", 23], ["dog", 3]];
// let a = myArray.shift();
// console.log(myArray);

// let ourArray = [1, 2, 3];
// let r = ourArray.pop();
// console.log(ourArray);

// let ourArray = ["stmipson", "j", "cat"]
// ourArray.push(["happy", "joy"])
// console.log(ourArray);

// let myArray = [["john, 23"],["cat, 2"]]
// myArray.push(["dog, 3"])
// console.log(myArray);

// let myArray = [["john, 23"], ["cat", 2]]
// let removedFromArray = myArray.pop();
// console.log(myArray);

// let myArray = [["bike", 55], ["car", 77]]
// myArray.shift(0);
// console.log(myArray);

// function ourReusableFunction() {
//     console.log("salom dunyo");

// }
// ourReusableFunction()
// ourReusableFunction()
// ourReusableFunction()
// ourReusableFunction()

// function myReusableFunction() {
//     console.log("tez O'rgan");

// }
// myReusableFunction()
// myReusableFunction()
// myReusableFunction()

// function ourFunctionWithArgs(a, b){
//     console.log(a / b);

// }
// ourFunctionWithArgs(8, 4)

// function ourFunctionWithArgs(n, m){
//     console.log(n * m);

// }
// ourFunctionWithArgs(5, 6)

// function myLocalScope(){
//     myVar = 9
//     console.log(myVar);

// }
// myLocalScope()

// var outerWear = "T-shirt";

// function myOutfit(){
//    var outerWear = "sweater"

//     return outerWear;
// }
// console.log(myOutfit());
// console.log(outerWear);

// let outerWear = "futbolka"

// function myOutfit() {
//     var outerWear = "kostyum"

//     return outerWear
// }

// console.log(myOutfit());
// console.log(outerWear)

// function minusSeven(num) {
//     return num / 3
// }
// console.log(minusSeven(99));

// let x = 95
// x /= 5

// console.log(x);

// let isMember = false

// isMember ? console.log("$2.0") : console.log("$10.0");

// function nextInline(arr, item) {
//     arr.push(item);
//     return arr.shift()
// }

// var testArr = [1,2,3,4,5];

// console.log("before: " + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("after: " + JSON.stringify(testArr));

// function ourTrueOrFalse(isTrue){
//     if (isTrue){
//         return "yes, it's true"
//     }
//     return "no, it's false"
// }

// function trueOrFalse(wasThatTrue){
//     if (wasThatTrue){
//         return "yes, that was true"
//     }
//     return "no, that was false"
// }

// console.log(trueOrFalse(false));

/*function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }
    return "not equal"
}
console.log(testEqual(12))*/

// function testStrict(val){
//     if (val === 7){
//         return "equal"}

//         return "not equal"
//     }
//     console.log(testStrict(10-3));

// function compareEquality (a, b) {
//     if (a === b) {
//         return "equal"
//     }
//     return "not equal"
// }
// console.log(compareEquality(10, "10"));

// function testNotEqual(val) {
//     if (val != 99) {
//         return "not equal"
//     }
//     return "equal"
// }
// console.log(testNotEqual(98));

// function testNotEqual(val) {
//     if (val !== 19){
//         return "not equal"
//     }
//     return "equal"
// }
// console.log(testNotEqual(1));

// function testGreaterThan(val) {
//     if (val > 100) {
//         return "over 100"
//     }
//     if (val > 10) {
//         return "over 10"
//     }
//     return "10 or under"
// }
// console.log(testGreaterThan(101));

// let userValue = 4537

// let changedValuem = userValue.toString()

// let sum =1

// for (let i = 0; i < changedValuem.length; i++)
// {
//     sum *=changedValuem[i]

// }
// console.log(sum);

// for (let i = 1; i <= 10; i++) {
//    if (i % 2 != 0){
//      if (i === 5){
//         continue
//      }
//      console.log(i);

//    }
// }

// for (let i = 1; i < 10; i++) {

//     if (i !=9)
//         console.log(i);

// }

// let arr = [23, 44, 54]

// arr.pop()
// arr.shift()
// arr.unshift(54)
// arr.push(23)

// console.log(arr);

// let arr = [1,2,3,4,5, 6]
// let min = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] <= min){
//         min = arr[i]
//     }

// }
// console.log(min);

// o -= 5

// console.log(o);

// let a = "65.5"

// console.log(Math.floor(a));

// console.log(Math.ceil(a));

// console.log(Math.round(a));

// console.log((Math.random() * 10).toFixed(3));

// console.log(Math.abs(a));

// console.log(Math.pow(3, 3));

// console.log(Math.max(2, 8));

// let yashil = false
// let qizil = false
// let yellow = false

// if (yashil == true) {
//     console.log("oq yo'l");

// }else if (qizil == true) {
//     console.log("to'xtang");

// }else if (yellow == true){
//     console.log("sabr qiling");

// } else {
//     console.log("svetafor buzuq");

// }

// let a = -5
// let b = -8
// let c= 8
// let sum = 0

// if(a % 2 == 0){
//     sum += 1
// }if(b % 2 == 0){
//     sum += 1
// }if(c % 2 == 0){
//     sum += 1
// }
// console.log("juftlar sonlar " + sum + " ta");

// let trafficLight = "red"

// let text

// switch (trafficLight){
//     case "green":
//         text = "Go ahead";
//         break;
//         case "yellow":
//             text = "wait a minut";
//             break;
//             case "red":
//                 text = "stop"
//                 break;
//                 default:
//                     text = "The traffic light is not working"
// }
// console.log(text);

// let trafficLightGreen = false

// trafficLightGreen ? console.log("go ahead") : console.log("stop");

// let sum = 1

// for (let i = 1; i <=10; i++) {
//     if(i % 2 == 0 ){
//       sum *= i
//     }

// }
// console.log(sum);

// let rep = 1

// while (rep <= 10){
//     console.log(`${rep} - attmept`);
//     rep++
// }

// let dice = Math.round(Math.random() * 6)

// while (dice !== 6) {
//     console.log(`you have ${dice}`);
//     dice = Math.round(Math.random() * 6)
//     if (dice === 6){
//         console.log("finally 6!!!");

//     }
// }

// let a = Math.round(Math.random()* 4)
// while (a !== 4){
//     console.log(`sizda ${a} number`)

//     a = Math.round(Math.random()* 4)

//     if (a === 4){
//         console.log("you win!!!");

//     }
// }

//  let s = "azamat"

// for (let i = 0; i <=s.length ; i++) {
//     console.log(s[i]);

// }

// let name = "the life"
// for (let i = name.length - 1; i >= 0; i--) {
//     console.log(name[i]);

// let a = 1234

// let n = a.toString()
// let m = 1

// for(let i = 0; i < n.length; i++) {

//     m *= n[i]
// }
// console.log(m);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// if(1 == 1) {
//   console.log("bor");

// }else{
//   console.log("yo'q");

// }

///////////////////////// logical operator

// let a = !1;
// let b = !2;

// console.log(false * 1);

// if (a && b) {
//   console.log("yaxshi");
// } else {
//   console.log("yomon");
// }

// if (a || b) {
//   console.log("yaxshi");
// } else {
//   console.log("yomon");
// }

// console.log(Boolean(false) * Boolean(1));

// console.log(Boolean(1));

///////////////// array

// console.log([].length);

// let arr = [3, 12, false, true, undefined, null, "s", false]

// console.log(arr[arr.length - 1]);

/////////////////// qiymat o'zgartirish
// arr[1] = 44

// console.log(arr);

//////////////////////////////////// nested array

// let nestedArray = [12, false, [34, true, ["salom"]]]

// console.log(nestedArray[2][2][0]);

// let fantastik_array = [44, ["salom", [[[[44, {}, "salom", [66]]]]]]]

// console.log(fantastik_array[1][1][0][0][0][3][0]);

// let arr = []

/////////////////////////////// push

// arr.push(3)
// arr.push(false)
// console.log(arr);

////////////////////////////// unshift

// arr.unshift(12)
// console.log(arr);

////////////////////////////// pop

// arr.pop()
// console.log(arr);

///////////////////////////// shift

// arr.shift()

// console.log(arr);

/////////////////////////////// includes

// console.log(arr.includes(33));

////////////////////////////////////////////// object

// console.log(typeof {});

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
//       age: 15,
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

// let arr = [23, 45, 89]

// for (let i of arr) {
//     console.log(i + 3)}

//---------------------

// let [name1, name2, ...rest] = ["jasur", "feruz", "umr", "temur ali keldi"]
// console.log(rest[0]);
// console.log(rest[1]);

    