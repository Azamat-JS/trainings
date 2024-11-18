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

///------------------- palindrome

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// function findPalindrome(s) {
//   let palindromes = [];

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       let substring = s.slice(i, j);

//       if (isPalindrome(substring)) {
//         palindromes.push(substring);
//       }
//     }
//   }

//   return palindromes
// }

// const result = findPalindrome("ababa");
// console.log(result)

//-----------------------

// function fibonacciSequence(n) {
//     let fibSequence = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
//     }

//     return fibSequence;
// }

// const result = fibonacciSequence(10);
// console.log(result);

//-------------

// function findPairs(arr, n){
//     let emptyArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//            if(arr[i] + arr[j] === n){
//             emptyArr.push([arr[i], arr[j]])
//            }

//         }
//     }
//     return emptyArr
// }

// console.log(findPairs([1, 2, 3, 4, 5], 5));

//-----------------------------

// function closestFibonacciNumbers(n) {
//     let fibSequence = [0, 1]; // Initialize with the first two Fibonacci numbers
    
//     // Generate Fibonacci sequence until the numbers surpass 'n'
//     while (fibSequence[fibSequence.length - 1] < n) {
//         let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
//         fibSequence.push(nextFib);
//     }

//     // Now find the two closest Fibonacci numbers to 'n'
//     let lastFib = fibSequence[fibSequence.length - 1];
//     let secondLastFib = fibSequence[fibSequence.length - 2];

//     // Compare the differences to find the closest numbers
//     if (Math.abs(lastFib - n) < Math.abs(secondLastFib - n)) {
//         return [secondLastFib, lastFib];
//     } else {
//         return [secondLastFib, lastFib];
//     }
// }

// const result = closestFibonacciNumbers(10);
// console.log(result); // Output: [8, 13]

