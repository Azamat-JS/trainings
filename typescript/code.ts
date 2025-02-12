// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

//---------------------------

// type User = {id:number, name:string, joinedTime:string}
// type Admin = {id:number, name:string, createdTime:string}
// type People = User | Admin
// function checkAdmin(person:People):void{
// if('joinedTime' in person){
//     console.log(`${person.name} is not admin`);    
// }else{
//     console.log(`${person.name} is admin`); 
// }
// }
// const customer:Admin = {
//     id:123,
//     name: 'Umar',
//   createdTime:'30.12.2024'
// }
// checkAdmin(customer)

//---------------------- truthy and falsy ----------------
// function printLength(str:string | null | undefined){
//     if(str ){
//         console.log(str.length);
//     }else{
//     console.log('no string provided');
//     }
// }
// printLength('hey')
// printLength('')
// printLength(undefined)
// printLength(null)
//-------------------------------

// try {
//     throw 'some error'
//     // throw new Error('this is an error')
// } catch (error) {
//     if(error instanceof Error){
//         console.log(`cauth an Error object :${error.message}`);
//     }else{
//         console.log('unknown error...');

//     }
// }
//---------------------------
// function checkInput(input:Date | string):string{
//     if(input instanceof Date){
//         return input.getFullYear().toString()
//     }
//     return input
// }
// const year = checkInput(new Date())
// const random = checkInput('2020-05-05')
// console.log(year);
// console.log(random);
//---------------------------- check name
// function checkName(name:string | null):string{
//     if(name){
//         return `${name} is available`
//     }else{
//         return "you should provide name properly"
//     }
// }
// type Admin = {id:number, name:string, createdTime:string}
// const customer:Admin = {
//     id:123,
//     name: 'Umar',
//   createdTime:'30.12.2024'
// }
// const isName = checkName(customer.name)
// console.log(isName);

//------------------- type Predicate ------------
// type Student = { name: string; study: () => void };

// type User = { name: string; login: () => void };

// type Person = Student | User;

// const randomPerson = (): Person => {
//   return Math.random() > 0.5
//     ? { name: "john", study: () => console.log("studying") }
//     : { name: "mary", login: () => console.log("logging in") };
// };
// // const person = randomPerson()
// const person: Person = {
//   name: "anvar",
//   login: () => console.log("study"),
// };

// function isStudent(person: Person): person is Student {
//   //   return 'study' in person
//   return (person as Student).study !== undefined;
// }
// if (isStudent(person)) {
//   person.study();
// } else {
//   person.login();
// }

//------------- discriminated unions and exhaustive check using the never type ==----------

// type IncrementAction = {
//   type: "increment";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type DecrementAction = {
//   type: "decrement";
//   amount: number;
//   timestamp: number;
//   user: string;
// };

// type Action = IncrementAction | DecrementAction;

// function reducer(state: number, action: Action) {
//     switch(action.type){
//         case 'increment':
//         return state + action.amount
//         case 'decrement':
//         return state - action.amount
//         default:
//           const  unexpectedAction:never = action
//             throw new Error(`Unexpected Action: ${unexpectedAction}`)
//     }
// }
// const newState = reducer(15, {
//   user: "john",
//   type:'increment',
//   amount: 6,
//   timestamp: 1432,
// });
// console.log(newState);

//------------------- Generics ------------
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

// let array1:Array<string> = ['apple', 'banana', 'mango']
// array1.pop()
// console.log(array1);
//------------^^^^^^^^^^^^^^^^^^^^^^^^
// function genericFunc<T>(arg: T): T {
//   return arg;
// }

// const someStringValue = genericFunc<string>("u kim?");
// const someNumberValue = genericFunc<number>(2);

// interface GenericInterface<T> {
//   value: T;
//   getValue: () => T;
// }

// const genericString: GenericInterface<string> = {
//   value: "komil kishi",
//   getValue() {
//     return this.value;
//   },
// };
// const genericNumber: GenericInterface<number> = {
//   value: 7,
//   getValue() {
//     return this.value;
//   },
// };
// const genericBoolean: GenericInterface<boolean> = {
//   value: true,
//   getValue() {
//     return this.value;
//   },
// };

// async function someFunc(): Promise<number> {
//   return 2134;
// }
// const result = someFunc();
// console.log(result);

//------------ ^^^^^^^^^^^^^^6
// function generateStringArray(length:number, value:string):string[]{
//     let result:string[] = []
//     result = Array(length).fill(value)
//     return  result
// }


// function createArray<T>(length:number, value:T):Array<T>{
//     let result:T[] = []
//     result = Array(length).fill(value)
//     return  result
// }
// let arrayStrings = createArray<string>(4, 'hey') 
// let arrayNumbers = createArray<number>(7, 15) 

// console.log(arrayStrings);
// console.log(arrayNumbers);

//--------- multiple variable type -----------
// function pair<T, U>(param1: T, param2: U): [T, U]{
//     return [param1, param2]
// }
// let result = pair<number, string>(234, 'bne')
// let result2 = pair(234, 2300)
// console.log(result);
// console.log(result2);
//------------------------------
// function processValue<T extends string | number>(arg:T):T{
//     console.log(arg);
//     return arg
// }
// processValue('you are at home')
// processValue(34)

const john: {id:number; name: string, isActive: boolean} = {
    id:1,
    name: 'john',
    isActive:true
}

const susan: {id:number, name: string, isActive: boolean} = {
    id:1,
    name:'susan',
    isActive:false
}

