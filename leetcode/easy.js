// let compose = function(functions){
//     return function(x){
//         return functions.reduceRight((acc, fn) => fn(acc), x)
//     }
// }
// const result = compose([x => x + 1, x => x * x, x => 2 * x])
// console.log(result(4)); // 65

//--------------- isEmpty

// let isEmpty = function(obj){
//     for(let key in obj)
//         return false;
//     return true;
// }

// let object = {
//     name: 'ali'
// }
// let arr = [true]

// let obje = {}
// let array = []

// console.log(isEmpty(array));
