// function calculatePrice(price:number, discount?:number):number{
//     return price - (discount || 0)
// }
// const totalPrice = calculatePrice(50, 20)
// console.log(totalPrice);
// -----------------
function calculateScore(initial, penalty) {
    if (penalty === void 0) { penalty = 0; }
    return initial - penalty;
}
var afterPenalty = calculateScore(120, 50);
var afterPen = calculateScore(120);
console.log(afterPenalty);
console.log(afterPen);
var car = { brand: 'ford', model: 'mustang' };
var product = { name: 'shoes', price: 120 };
var pupil = { name: "Ali", age: 23 };
// function printName<T extends Student>(input:T):void{
//     console.log(input.name); 
// }
// function printName<T extends Student | Product>(input:T):void{
//     console.log(input.name); 
// }
function printName(input) {
    console.log(input.name);
}
printName(pupil);
printName(product);
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
