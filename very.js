//-------- 1 
// function myFunc(arr) { 
//         let big = 0   
//         let a = 0
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < arr[i + 1]) {
//                 a += 1
//             }else if(big < a){
//                 big = a
//                 a = 0
//             }
//         }
//         return big + 1
//     }
//     console.log(myFunc([12,22, 30, 5,6,7,8,9, 3]));

    //----------- 2

    // // add 1 ------------------------------------------------
// function triangle(array) {
  
//   for (let i = 0; i < array.length; i++) {
//     tashqi = (array.length - array[i].length )
//        console.log(" ".repeat(tashqi) + array[i].join(" "))
//   } 
//   }
// triangle([[2], [3,4], [6,5,7], [4,1,8,3], [11, 12, 13, 14]]);

//-------- 3

// function findPalindromes(n1, n2) {
//     let xarr = [];
//     let carr = [];
//     for (let i = n1; i <= n2; i++) {
//          if(Number(i)){
//          let a = Number(i.toString().split("").reverse().join(""))
//          xarr.push(a)
//          }
//         if(xarr.includes(i)){
//           carr.push(i)
//         }
//     }
//     return carr
//   }
//   console.log(findPalindromes(100, 150));
//   console.log(findPalindromes(250, 293));

//-------- 4

// function longestCommonPrefix(wordsArr) {
//     if (wordsArr.length === 0) return '';

//     let prefix = wordsArr[0];

//     for (let i = 1; i < wordsArr.length; i++) {
        
//         while (wordsArr[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, prefix.length - 1);
//             if (prefix === '') return ''
//         }
//     }

//     return prefix;
// }

// console.log(longestCommonPrefix(['tea', 'teacher', 'tear']))
// console.log(longestCommonPrefix(['flower', 'flow', 'flight']))

//------------- 5

// function findDifference(arr1, arr2){
//    let bigArr = arr1.concat(arr2)
//   let result = bigArr.filter((item, index, self) => self.indexOf(item) === self.lastIndexOf(item))
// return result
//         }
// console.log(findDifference([2, 4, 1], [2, 3, 8]));
// console.log(findDifference([5, 1, 8, 90], [2, 5, 8, 10]));


//------------------

// let arrObj = [
//     {name: "sherzod", age: 30},
//     {name:"alisher", age: 23},
//     {name: "jasur", age: 34}
// ]

// function upper(arr){
//  const uppercase = arr.map(names => ({
//         ...names,
//         name: names.name.toUpperCase()
//     }))
//     return uppercase
// }

// const updated = upper(arrObj)
// console.log(updated);

