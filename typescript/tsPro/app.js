//----------------- 1 - Array with tuple
// function nums(n:number[]):number{
//   let sum = n.reduce((acc, curr) => acc + curr, 0)
//   return sum
// }
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log(nums([12, 34, 45]));
//--------- 2 -
// function str(word:string[]):void{
//   for (const element of word) {
//     console.log(element.length); 
//   }
// }
// str(['apple', 'pear', 'kiwi'])
// ----------- 3 -
// let info:[string, number, string] = ['ali', 30, 'dev']
// console.log(info);
// //------------- 1  Alias
// type Car = {make: string, model: string, year: number}
// let arr:Car[] = [{model: 'merc', make:'uzb', year: 2020}, {model: "chevrolet", make: "US", year: 2024}]
// console.log(arr);
//--------- ----- 2
// type books = {title: string, author: string, pages: number}
// function library(items:books):void{
// console.log(items);
// }
// library({title: 'pi', author:'john', pages: 23})
//----------- 1   Union
// function test(element: string | number): void {
//   if (typeof element === "string") {
//     console.log(element.length);
//   } else {
//     console.log(element * 2);
//   }
// }
// test('apple')
// test(5)
//------------- 2 
// type strOrNum = string | number 
// function identifier(data:strOrNum):void{
// if(typeof data === "string"){
//   console.log({yourname: data});
// }else{
//   console.log({yourage: data});
// }
// }
// identifier('ali')
// identifier(23)
// ---------- 1 Primitive 
// function isValidEmail(email:string):boolean{
//  return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)
// }
// console.log(isValidEmail('bob@gmail.com'))
// console.log(isValidEmail('bobemail.com'))
//------------ 2 
// let a;
// let a = null
// if(a === null){
//   console.log('this is null');
// }if(a === undefined){
//   console.log('this is undefined');
// }
// ------------ 1 Void and Never
// function simpleFunc(name:string):void{
//   console.log(name);
// }
// console.log(simpleFunc('umid'));
///--------- 2
// function loop(num: number):never{
//   throw new Error('Type of num can not be string')
// }
/// --------------- 1 Additional tasks
// ------------ 2  interface
// interface IUserInfo {
//   name:string;
//   age:number;
//   address:string;
// }
// const obj:IUserInfo = {
//   name: 'anvar',
//   age: 34,
//   address:'Main street'
// }
//----------- 3 generics
// const gameScores = [14, 12, 21, 34, 55]
// const favoriteThings = ["books", "laptop", "watch", "smartphone"]
// const voters = [{name:'Abror', age: 45}, {name:'Bobur', age: 30}]
// function getLastItem<T>(array:T[]):T | undefined{
//     return array[0] 
// }
// console.log(getLastItem(gameScores))
// console.log(getLastItem(favoriteThings))
// console.log(getLastItem(voters))
//////----------  Homework
//---------1
// const data = { name: 'ali', age: 23, country: 'Uzbekistan' };
// function upperCaseKeys(obj: object): object {
//   const newObj: Record<string, any> = {};
//   for (let key in obj) {
//     newObj[key.toUpperCase()] = (obj as Record<string, any>)[key];
//   }
//   return newObj;
// }
// console.log(upperCaseKeys(data));
//-------------- 2
// function fizzBuzz(n:number):string[]{
//   let arr = []
//   for (let i = 1; i <= n; i++) {
//     if(i % 3 === 0){
//       arr.push('Fizz')
//       continue;
//     }if(i % 5 === 0){
//       arr.push("Buzz")
//       continue;
//     }if(i % 15 === 0){
//       arr.push('FizzBuzz')
//       continue;
//     }else{
//       arr.push(String(i))
//     }
//   }
//   return arr
// }
// console.log(fizzBuzz(15));
// ------------ 3
// function getPermutations(str: string): string[] {
//   if (str.length <= 1) return [str];
//   let permutations: string[] = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]; 
//     let remainingStr = str.slice(0, i) + str.slice(i + 1);
//     let subPermutations = getPermutations(remainingStr); 
//     for (let perm of subPermutations) {
//       permutations.push(char + perm);
//     }
//   }
//   return permutations;
// }
// console.log(getPermutations("abc"));
// -------------- 4
function jsonDiff(obj1, obj2) {
    var diff = {};
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    var allKeys = __spreadArray(__spreadArray([], keys1, true), keys2.filter(function (key) { return !keys1.includes(key); }), true); // Get unique keys manually
    for (var _i = 0, allKeys_1 = allKeys; _i < allKeys_1.length; _i++) {
        var key = allKeys_1[_i];
        var oldValue = obj1[key];
        var newValue = obj2[key];
        if (oldValue !== newValue) {
            diff[key] = { old: oldValue, new: newValue };
        }
    }
    return diff;
}
var oldData = { name: 'ali', age: 25, city: 'tashkent' };
var newData = { name: 'ali', age: 26, country: 'uzbekistan' };
console.log(jsonDiff(oldData, newData));
