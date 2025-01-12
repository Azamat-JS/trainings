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

// const deepwork = new Book("Deep work", "Cal Newport");

// console.log(deepwork.info);
// // deepwork.checkOut = true
// console.log(deepwork);
// console.log(deepwork.someInfo);
// console.log(deepwork.checkOut);

// interface IPerson{
//   name:string;
//   age:number;
//   greet():void;
// }

// class Person implements IPerson {
//     constructor(public name:string, public age:number){}
//     greet():void{
//         console.log(`salom, my name is ${this.name} and I'm ${this.age} years old`);
        
//     }
// }
// const result = new Person('Azamat', 28)
// console.log(result);

//-------------- generics ----------
const gameScores = [14, 12, 21, 34, 55]
const favoriteThings = ["books", "laptop", "watch", "smartphone"]
const voters = [{name:'Abror', age: 45}, {name:'Bobur', age: 30}]

function getLastItem<T>(array:T[]):T | undefined{
    return array[array.length - 1]
    
}
getLastItem(voters)
getLastItem(favoriteThings)
getLastItem(gameScores)