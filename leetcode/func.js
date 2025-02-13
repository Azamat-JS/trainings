// //////  Hoisting f 
// function createFunction(){
//     return f;
//     function f(a, b){
//         const sum = a + b;
//         return sum
//     }
// }
// const f = createFunction()
// console.log(f(3, 5));
////----------------------------------
// Clousures

// function createAdder(a){
//     function f(b){
//         const sum = a + b
//         return sum
//     }
//     return f
// }
// const a = createAdder(3)
// console.log(a(4));
//-------------------------------------
//---------1
// function f(...args){
//     const sum = args[0] + args[1]
//     return sum;
// }
// console.log(f(3, 9));
//-----------2
// var createHi = function(){
//     return function(...args){
//        console.log("Hi world")
//     }
    
// }
// const h = createHi()
// h()

//---------------

// var createCounter = function(n){
//     let counter = n - 1
//     return function(){
//         return counter += 1
//     }
// }
// const func = createCounter(4)
// console.log(func());
// console.log(func());
// console.log(func());

//-------------------

// const expect = function(val){
//     return {
//         tobe: (val2) => {
//             if(val === val2) return true;
//             else throw new Error("Not Equal")
//         },
//         notToBe: (val2) => {
//             if(val !== val2) return true;
//             else throw new Error('Equal')
//         }
//     };
// };

// const ex = expect(5)
// console.log(ex.tobe(5));
// console.log(ex.notToBe(10));
// console.log(ex.tobe(10));
// console.log(ex.notToBe(5));

//--------------------------------

// let createCounter = function(init){
//     let presentCount = init
//     return {
//         increment:()=> ++presentCount,
//         decrement:()=> --presentCount,
//         reset:() => presentCount = init
//     }
// };
// const c = createCounter(3)
// console.log(c.decrement());
// console.log(c.reset());
// console.log(c.increment());

// let map = function(arr, fn){
//     const array = [];
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = fn(arr[i], i);  
//     }
//     return array;
// }

// //^^^^^^^^^^^^^^^^

// const nums = [1, 2, 3, 4];
// const double = function(n){
//     return n * 2
// };
// console.log(map(nums, double));
// console.log(map(nums, (n, i) => n + i));
// console.log(map(nums, (n) => 42 ));

//----------------

// let filter = function(arr, fn){
//   let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(fn(arr[i], i)){
//             result.push(arr[i])
//         } 
//     }
//     return result
// }
// const t = [1,2, 3, 6]
// console.log(filter(t, (v) => v % 2 === 0));
