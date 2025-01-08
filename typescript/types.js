// class Book {
//   private checkedOut: boolean = false;
//   constructor(
//     readonly title: string,
//     public author: string
//   ) {}
// get info(){
// return `${this.title} by ${this.author}`
// }
// private set checkOut(checkedOut:boolean){
// this.checkedOut = checkedOut
// }
// get checkOut(){
//   return this.checkedOut;
// }
// public get someInfo(){
//   this.checkOut = true
//   return `${this.title} by ${this.author}`
// }
//   }
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("salom, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old"));
    };
    return Person;
}());
var result = new Person('Azamat', 28);
console.log(result);
