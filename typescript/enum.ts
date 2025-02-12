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
// let someValue:any = 'this is a string'
// let strLenght:number = (someValue as string).length

// type Bird = {
//     name:string,
// }

// let birdString = '{"name": "Eagle"}'
// let dogString = '{"breed":"Poodle"}'

// let birdObject = JSON.parse(birdString)
// let dogObject = JSON.parse(dogString)

// let bird = birdObject as Bird
// let dog = dogObject as Bird

// console.log(bird.name);
// console.log(dog.name);

// enum Status{
//     Pending = 'pending',
//     Declined = 'declined'
// }

// type User = {
//     name:string,
//     status:Status
// }

// const statusValue = 'pending'
// const user:User = {name:'john', status:statusValue as Status}

// -------------------- type unknown -----------
// let unknownValue:unknown

// unknownValue = 'salom dunyo'
// unknownValue = [1, 4, 12]
// unknownValue = 12.234523

// if(typeof unknownValue === 'number'){
//     unknownValue.toFixed(2)
// }

// function runSomeCode(){
//     const random = Math.random()
//     if(random < 0.5){
// throw new Error("there was an error")
//     }else{
// throw 'some error'
//     }
// }

// try {
//   runSomeCode()
// } catch (error) {
//     if(error instanceof Error){
//         console.log(error.message);       
//     }else{
//         console.log(error);
        
//     }
// }

//----------------- type NEVER ---------------

// let someValue:never = 0

// type Theme = 'light' | 'dark'

// function checkTheme(theme:Theme):void{
// if(theme === 'light'){
//     console.log('light theme');
//     return
// }
// if(theme === 'dark'){
//     console.log('dark theme');
//   return 
// }
// theme; // type never
// }

// enum Color {
//     Red,
//     Blue,
//     Green
// }

// function getColorName(color:Color){
//     switch(color){
//         case Color.Red:
//             return 'Red'
//             case Color.Blue:
//                 return 'Blue'
//                 case Color.Green:
//                 return "Green"
//                 default:
//                     let unexpectedColor:never = color
//                     throw new Error('Unexpexted color value :' + color)
//     }
// }
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Green));
//----------------------------

// export function sayHi(name:string):void{
//     console.log(`hi ${name}`)
// }
// export let person = 'sarvar'

// export type Student ={
//     name:string,
//     age:number
// }

// const newStudent: Student = {
//     name:'peter',
//     age: 34
// }
// export default newStudent

//------------------- fetch data -----------
const url = 'https://reqres.in/api/users?page=2';

type ApiResponse = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<{ id: number; email: string; first_name: string; last_name: string; avatar: string }>;
};

async function fetchData(url: string): Promise<ApiResponse['data']> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('http error! status:' + response.status);
        }
        const data: ApiResponse = await response.json();
        return data.data; // Return only the "data" array from the response
    } catch (error) {
        const errMsg = error instanceof Error ? error.message : "there was an error";
        console.log(errMsg);
        return [];
    }
}

// Wrapping in an async function since top-level await is not supported in CommonJS
(async () => {
    const tours = await fetchData(url);

    // Map through the fetched data and log names
    tours.map((tour) => {
        console.log(`${tour.first_name} ${tour.last_name}`);
    });
})();

// Call the function and log the data
fetchData(url).then(data => console.log(data));

