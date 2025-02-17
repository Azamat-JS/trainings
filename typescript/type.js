// function calculatePrice(price:number, discount?:number):number{
//     return price - (discount || 0)
// }
// const totalPrice = calculatePrice(50, 20)
// console.log(totalPrice);
// -----------------
// function calculateScore(initial:number, penalty:number = 0){
//     return initial - penalty
// }
// const afterPenalty = calculateScore(120, 50)
// const afterPen = calculateScore(120)
// console.log(afterPenalty);
// console.log(afterPen);
//-----------------
// function sum(text:string, ...numbers:number[]){
//     const doubled = numbers.map((num) => num * 2)
//     console.log(doubled);
//     let total = numbers.reduce((acc, val) => {
//         return acc + val
//     }, 0)
//     return `${text}:${total}`
// }
// let result = sum('the total is: ', 3, 5, 2, 7,1)
// console.log(result);
//---------------------------------------
// function logMessage(message:string):void{
//     console.log(message);
// }
// logMessage('Salom, TypeScript')
//- -------- 1 - task
// function processInput(param:string | number){
//     if(typeof param === 'number'){
//             console.log(param * 2);
//     }else{
//         console.log(param.toLocaleUpperCase());
//     }
// }
// processInput(10)
// processInput('kamol')
//-------------------------
// function createEmployee({ id }: { id: number }):{id:number;isActive:boolean}{
//     return {id, isActive: id % 2 === 0}
// }
// const first = createEmployee({id:1})
// const second = createEmployee({id:2})
// console.log(first, second);
//---------------------------
function createStudent(student) {
    console.log("welcome to the course ".concat(student.name.toUpperCase(), "!!!"));
}
var newStudent = {
    id: 5,
    name: 'anna',
    email: 'anna@gmail.com'
};
createStudent(newStudent);
createStudent({ id: 1, name: 'bob' });
//-----------------------
// function processData(input:string|number,config:{reverse:boolean}={reverse:false}){
// if(typeof input === 'number'){
//     return(input * input);
// }else{
//      return config.reverse ? input.split("").reverse().join("").toUpperCase() : input.toLocaleUpperCase
// }
// }
// console.log(processData('asdfads', {reverse:true}));
// console.log(processData('asdfads'));
// console.log(processData(5, {reverse:true}));
//----------------------------- type alias with obj
// type User = { id: number; name: string; isActive: boolean };
// const john: User = {
//   id: 1,
//   name: "john",
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: "susan",
//   isActive: false,
// };
// function createUser(user: User):User {
//   console.log(`hey there ${user.name.toLocaleUpperCase()}!!`);
//   return user;
// }
// ------------ alias with variable
// type StringOrNumber = string | number
// let value:StringOrNumber
// value = 'hr'
// value = 234
// ---------- alias with specific values
// type Theme = 'light' | 'dark'
// let theme:Theme
// theme = 'light'
// function setTheme(t:Theme){
//   theme = t
//   return theme
// }
// console.log(setTheme('dark'));
// type Employee = {id:number, name:string, department:string}
// type Manager = {id:number, name:string, employees:Employee[]}
// type Staff = Employee | Manager
// function printStaffDetails(staff:Staff){
//     if('employees' in staff){
//         console.log(`${staff.id} - employee is ${staff.name} working with ${staff.employees[0].name}`);
//     }
//     else{
//         console.log(`${staff.name} belongs to ${staff.department} department`);
//     }
// }
// const alice:Employee = {id:1, name:'alice', department:'sales'}
// const kevin:Employee = {id:2, name:'kevin', department:'management'}
// const kate:Manager = {id:2, name:'kate', employees:[alice, kevin]}
// printStaffDetails(alice)
// printStaffDetails(kevin)
// printStaffDetails(kate)
//----------------
// import newStudent from "./enum";
// import { person,  sayHi, Student } from "./enum";
// sayHi('Jasur')
// console.log(person);
// console.log(newStudent);
// const anotherStudent:Student = {
//     name:'bob',
// age: 12
// }
// console.log(anotherStudent);
//----------------------------------------
// type ValueType = string | number | boolean
// let value: ValueType
// const random = Math.random()
// value = random < 0.33 ? 'salom' : random < 0.66 ? 123.456 : true
// function checkValue(value:ValueType):void{
//     if(typeof value === 'string'){
//     console.log(value.toLocaleLowerCase());
//     return;    
//     }
//     if(typeof value === 'number'){
//     console.log(value.toFixed());
//     return;    
//     }
//     console.log(`boolean: ${value}`);
// }
// checkValue(value)
//----------------- type generics-------
// type Car = {brand: string, model:string}
// const car:Car ={brand: 'ford', model:'mustang'}
// type Product = {name:string, price:number}
// const product:Product = {name:'shoes', price:120}
// type Student = {name:string, age:number}
// const pupil:Student= {name: "Ali", age:23}
// function printName<T extends Student>(input:T):void{
//     console.log(input.name); 
// }
// function printName<T extends Student | Product>(input:T):void{
//     console.log(input.name); 
// }
// function printName<T extends {name:string}>(input:T):void{
//     console.log(input.name); 
// }
// printName(pupil)
// printName(product)
//------------- default type ------------- 
// interface StoreData<T = any> {
//     data: T[]
// }
// const storeNums:StoreData<number> = {
//     data:[1, 2, 3, 4]
// }
// const randomStuff:StoreData = {
//     data:[12, 'log']
// }
