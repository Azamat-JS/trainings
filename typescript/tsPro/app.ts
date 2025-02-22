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

// function jsonDiff(obj1:object, obj2:object):object{
//   let diff:Record<string, any> = {}

//   let keys1 = Object.keys(obj1)
//   let keys2 = Object.keys(obj2)
//   let allKeys = [...keys1, ...keys2.filter(key => !keys1.includes(key))]

//   for (let key of allKeys) {
//     let oldValue = (obj1 as Record<string, any>)[key];
//     let newValue = (obj2 as Record<string, any>)[key];

//     if(oldValue !== newValue){
//       diff[key] = {old: oldValue, new: newValue}
//     }
//   }
//   return diff;
// }

  
//   const oldData = { name: 'ali', age: 25, city: 'tashkent' };
//   const newData = { name: 'ali', age: 26, country: 'uzbekistan' };
  
//   console.log(jsonDiff(oldData, newData));

  
//--------------- 5
// function sortIPs(ips: string[]): string[] {
//   return ips.sort((a, b) => {
//     const numA = a.split('.').map(Number);
//     const numB = b.split('.').map(Number);
    
//     for (let i = 0; i < 4; i++) {
//       if (numA[i] !== numB[i]) {
//         return numA[i] - numB[i];
//       }
//     }
    
//     return 0;
//   });
// }

// console.log(sortIPs(['192.168.0.1', '192.168.1.1', '172.16.0.1', '10.0.0.1']));

//-------- ---- 6

// function compressString(str:string):string{
//   let result = '';
//   let sum = 1
//   for (let i = 0; i < str.length; i++) {
//     while(i < str.length - 1 && str[i] === str[i + 1]){
//       sum++;
//       i++;
//     }
//     result += str[i] + sum;
//     sum = 1
//   }
//   return result
// }

// console.log(compressString('gguuiiiop'));
// console.log(compressString('apple'));

// --------------- 7

// function isValidSudoku(board: number[][]): boolean {
//   const size = 9;

//   const rows = new Array(size).fill(null).map(() => new Set<number>());
//   const cols = new Array(size).fill(null).map(() => new Set<number>());
//   const boxes = new Array(size).fill(null).map(() => new Set<number>());

//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       const num = board[i][j];
//       if (num === 0) continue;

//       const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

//       if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
//         return false;
//       }

//       rows[i].add(num);
//       cols[j].add(num);
//       boxes[boxIndex].add(num);
//     }
//   }

//   return true;
// }

// const board = [
//   [5, 1, 4, 0, 7, 3, 2, 0, 9],
//   [3, 5, 9, 8, 1, 6, 0, 4, 7],
//   [6, 9, 3, 2, 5, 7, 1, 8, 0],
//   [8, 6, 2, 1, 4, 9, 3, 5, 7],
//   [7, 2, 8, 5, 6, 1, 4, 9, 3],
//   [1, 7, 6, 9, 2, 8, 5, 3, 4],
//   [9, 3, 5, 7, 8, 4, 6, 1, 2],
//   [2, 4, 7, 3, 9, 5, 8, 6, 1],
//   [4, 8, 1, 6, 3, 2, 9, 7, 5]
// ];

// console.log(isValidSudoku(board));


//--------------- 8 anagrams

function groupAnagrams(words: string[]): string[][] {
  const map: Record<string, string[]> = {};

  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (!map[sortedWord]) {
      map[sortedWord] = []; 
    }
    map[sortedWord].push(word);
  }

  return Object.values(map);
}

console.log(groupAnagrams(['eat', 'tea', 'ate', 'ten', 'net', 'bag']));

