// function Person(name, age){
//     this.name = name;
//     this.age = age
// }
// Person.prototype.multiply = function(){
//     console.log(`${this.name} will be ${this.age * 2} by 2048`);
// }

// const ageCount = new Person("Ali", 30)
// ageCount.multiply()

//-------------- string prototype -----------------

// String.prototype.palindrom = function(){
// console.log(this == this.split("").reverse().join(""))
// }

// let s = "Meva"
// let a = "eve"

// a.palindrom()
//----------------- object prototype ------------------

// Object.prototype.findNames = function(){
//     for (const key in this) {
//        if(key === "name"){
//         return this[key]
//        }

//         }
//     }
// let obj = {
//     name: "Aziz",
//     age: 26
// }
// console.log(obj.findNames());

//-------------------- object prot ----

// function MyObj (name){
//     this.name = name
// }

// MyObj.prototype.verifying = function(){
//     return `${this.name} you joined to this group`
// }
// const person1 = new MyObj("Ali")
// const person2 = new MyObj("Aziz")
// console.log(person1.verifying())
// console.log(person2.verifying())
//--------------------  upgrading objects ------------

// function Laptop(brand, ram, program){
//     this.brand = brand,
//     this.ram = ram
//     this.program = program
// }

// Laptop.prototype.upgrades = function(newRam, newProgram){
// this.ram = newRam
// this.program = newProgram
// }

// const myLaptop = new Laptop("Mac", "8GB", "Linux")
// myLaptop.upgrades("16GB","IOS")
// console.log(myLaptop);

//----------------- constructo - --------------

// function Student (name){
//     this.name = name
// }

// Student.prototype.grades = [90, 80, 86]

// const student1 = new Student("Ali")
// const student2 = new Student("Anvar")

// student1.grades.push(95)

// console.log(student1.grades)

//----------------- contstructor --------------

// function Phone(model){
//     this.model = model
//     this.showModel = function(){
//   console.log(`"Model is ${this.model}"`);

//     }
// }
// Phone.prototype.showBrand = function(brand){
// console.log(`Brand is ${brand}`);

// }
// const phone = new Phone ("Iphone 16")
// phone.showModel()
// phone.showBrand("Apple")

//------------------- class makes obj --------------

// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }
// const myObj = new Person("Ali", 30)
// myObj.money = 5000
// myObj["address"] = "Ulug'bek"
// console.log(myObj);
//------------------------- class expression -----

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("name is too short");
//       return;
//     }
//     this._name = value;
//   }
// }
// // let user = new User("John")
// // console.log(user); // John

// let user = new User("Ali");
// console.log(user);

//-------------- Computed names [...]  ---------

// class Register {
//   ["say" + "Bey"]() {
//     console.log("salom");
//   }
// }
// new Register().sayBey()

//------------ class fields ---------

// class Name {
//     name = "Jasur";
//     sayHu(){
//         console.log(`hey, ${this.name}`);
        
//     }
// }
// new Name().sayHu()

//------------ class -
//  class MathUtil {
//  static PI = 3.14159

//  static getDiameter(radius){
//     return radius * 2
//  }

//  static getcircumference(radius){
//     return 2 * this.PI * radius
//  }
 
//  static getArea(radius){
//     return this.PI * radius * radius
//  }

//  }
//  console.log(MathUtil.PI);
//  console.log(MathUtil.getDiameter(10));
//  console.log(MathUtil.getcircumference(10));
//  console.log(MathUtil.getArea(10));
 
//--------------- exercise static -----

// class User {
//     static userCount = 0

//     constructor(username){
//         this.username = username
//         User.userCount++
//     }
//     static getUserCount(){
//    console.log(`There are ${User.userCount} users online`);
   
//     }
//     sayHi(){
//         console.log(`hi my username is ${this.username}`); 
//     }
// }
// const user1 = new User('Ilyos')
// const user2 = new User('Olim')
// const user3 = new User('Olim')
// user1.sayHi()
// user3.sayHi()
// User.getUserCount()

