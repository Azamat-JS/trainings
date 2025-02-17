//----------------- 1 - 
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

// //------------- 4 -

// type Car = {make: string, model: string, year: number}

// let arr:Car[] = [{model: 'merc', make:'uzb', year: 2020}, {model: "chevrolet", make: "US", year: 2024}]
// console.log(arr);

//--------- 5 

// type books = {title: string, author: string, pages: number}

// function library(items:books):void{
// console.log(items);
// }
// library({title: 'pi', author:'john', pages: 23})

//----------- 6
 function test(element:string | number):void{
  if(element === "string"){
    console.log(element.length);
  }else{
    console.log(element)
  }
 }



