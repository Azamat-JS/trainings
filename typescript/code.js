// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;
var findOutResult = function () {
    var random = Math.random();
    return random < 0.5
        ? { name: "john", score: parseFloat(random.toFixed(2)), result: function () { return console.log("you are applicant"); } }
        : { name: "martin", score: parseFloat(random.toFixed(2)), getJob: function () { return console.log('you are passed the interview'); } };
};
var findRes = findOutResult();
console.log(findRes);
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
//   type:'decrement',
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
