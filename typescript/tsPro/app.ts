//----------------- 1 - Array with tuple
// function nums(n:number[]):number{
//   let sum = n.reduce((acc, curr) => acc + curr, 0)
//   return sum
// }

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

function loop(num: number):never{
  throw new Error('Type of num can not be string')
}

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