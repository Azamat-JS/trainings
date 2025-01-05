"use strict";
// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }
// let priceAfterDiscount = calculatePrice(80, 20);
// console.log(priceAfterDiscount);
// -----------------
// function calculateScore(
//   initialScore: number,
//   penaltyPoints: number = 0
// ): number {
//   return initialScore - penaltyPoints;
// }
// let scoreAfterPenalty = calculateScore(200, 120);
// let scoreWithoutPenalty = calculateScore(300);
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
// function createStudent(student:{id:number;name:string}):void{
//     console.log(`welcome to the course ${student.name.toUpperCase()}!!!`);
// }
// const newStudent = {
//     id:5,
//     name:'anna',
//     email:'anna@gmail.com'
// }
// createStudent(newStudent)
// createStudent({id:1,name:'bob'})
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
