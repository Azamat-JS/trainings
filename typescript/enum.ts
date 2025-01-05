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
//----------------------------------- type assertion
let someValue:any = 'this is a string'
let strLenght:number = (someValue as string).length

type Bird = {
    name:string,
}

let birdString = '{"name": "Eagle"}'
let dogString = '{"breed":"Poodle"}'

let birdObject = JSON.parse(birdString)
let dogObject = JSON.parse(dogString)

let bird = birdObject as Bird
let dog = dogObject as Bird

console.log(bird.name);
console.log(dog.name);

enum Status{
    Pending = 'pending',
    Declined = 'declined'
}

type User = {
    name:string,
    status:Status
}

const statusValue = 'pending'
const user:User = {name:'john', status:statusValue as Status}

