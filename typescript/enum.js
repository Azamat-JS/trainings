// ---------- tuples
// let person:[string, number] = ['john', 25]
// let date:[number, number, number] = [5, 1, 2025]
// function getInfo():[number, boolean]{
//     return [12, false]
// }
// let takeData = getInfo()
// console.log(takeData[0]);
// console.log(takeData[1]);
// //--------optinal
// let jasur: [string, number?] = ['olim']
//-------------enums ------------
// enum ServerResponseStatus {
//     Success = 200,
//     Error = "error"
// }
// Object.values(ServerResponseStatus).forEach((value) => {
//   if(typeof value === 'number'){
//     console.log(value);
//   }
// })
// interface ServerResponse{
//     result:ServerResponseStatus,
//     data:string[]
// }
// function getServerResponse():ServerResponse{
//     return{
//         result:ServerResponseStatus.Error,
//         data:['first', 'second item']
//     }
// }
// const response:ServerResponse = getServerResponse()
// console.log(response);
// //------------------------------------
// enum NumericEnum {
//     Member = 1
// }
// enum StringEnum {
//     Member = 'Value'
// }
// let NumericEnumValue: NumericEnum = 1
// let StringEnumValue: StringEnum = 'Value'
// console.log(NumericEnumValue);
//------------------- tasks
// enum UserRole {
//   Admin = "admin",
//   Manager = "manager",
//   Employee = "employee",
// }
// type User = { id: number; name: string; role: UserRole, contact:[string, string] };
// const user: User = {
//   id: 12,
//   name: "nodir",
//   role: UserRole.Admin,
//   contact: ['nodir@gmail.com', '998910928353']
// };
// //----------------------------
// function createUser(obj: User) {
//   return obj;
// }
// const result = createUser(user);
// console.log(result);
//-----------------------------------
var someValue = 'this is a string';
var strLenght = someValue.length;
var birdString = '{"name": "Eagle"}';
var dogString = '{"breed":"Poodle"}';
var birdObject = JSON.parse(birdString);
var dogObject = JSON.parse(dogString);
// let bird = birdObject as Bird
var dog = dogObject;
// console.log(bird.name);
console.log(dog.name);
