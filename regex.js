// -------------- 1
// let a = "JavaScript"
// console.log(a.match(/Java[^script]/)); // JavaS

// ------- 2 find time 

// let regex = /\d\d[-:]\d\d/g
// console.log("Breakfast at 09:00. Dinner at 21-30".match(regex)); // ['09:00', '21-30']

// ---------- 3 find dots
// let regexp = /\.{3,}/g
// console.log("Salom!... How goes?....".match(regexp));

// ----------- 4 find digit

// let str = "+998(91)-092-83-53"
// let regex = /\d/g
// console.log(str.match(regex)); // [9,9,8,9,1,0,9,2,8,3,5,3]

// console.log(str.match(regex).join(""));

//------ 5 find decimal numbers

// let regex = /-?\d+(\.\d+)?/g
// let str = "-1.5 0 2 -123.4."
// console.log(str.match(regex)); // [ '-1.5', '0', '2', '-123.4' ]

// --------- parse expression

// function parse(expr) {
//     let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  
//     let result = expr.match(regexp);
  
//     if (!result) return [];
//     result.shift();
  
//     return result;
//   }
  
//   console.log( parse("-1.23 * 3.45") );  // -1.23, *, 3.45

// ---------- find only time

// console.log("Breakfast at 09:00 in the room 123:456.".match(/\b\d\d:\d\d\b/)); //09:00

//--------------- find positive numbers exclude components=------------

// let regex = /(?<!-)\d+/g
// let str = "0 12 -5 123 -18"
// console.log(str.match(regex));//[ '0', '12', '123', '8' ]
//------------- find positive as a whole
// let regexp = /(?<![-\d])\d+/g
// let str = "0 12 -5 123 -18"
// console.log(str.match(regexp));//[ '0', '12', '123' ]
