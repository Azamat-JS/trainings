//------------------ 1 - vazifa -------------------

// function countVowels(string){
//     let letters = ["a", "i", "u", "e", "o", 'A', 'I', 'O', 'E', 'U'];
//       let newWords = string.split("")
//        let sumVowels = 0
//       for (let i = 0; i < letters.length; i++) {
//         for (let j = 0; j < newWords.length; j++) {
//           if (letters[i] === newWords[j]) {
//                sumVowels++
//           }
//         }
//       }
//       return sumVowels
// }
// console.log(countVowels("Salom Olam"));
// console.log(countVowels("You are an Engineer"));

//---------------------------- 2 - vazifa -------------------


//-------------------------- 3 - vazifa -------------------

// function minPairSum(arr0){
//     let min = Math.min(...arr0)
//     let max = Math.max(...arr0)
//     return [min, max]
// }
// console.log(minPairSum([1, 60, -10, 70, -80, 85]));
// console.log(minPairSum([10, 9, -21, 75, -8, 66]));

//------------------------- 4 - vazifa ------------------

// function sumDigitsInString(strNums){
//     let nums = strNums.match(/\d+/g)
//     let sum = nums.reduce((a, b) => a + Number(b), 0)
//     return sum
// }
// console.log(sumDigitsInString("a1b2c3"));
// console.log(sumDigitsInString("ab5cd4n1"));

//---------------------- 5 - vazifa -------------------

//----------------------- 6 - vazifa ------------------==

// function findPairs(arr, num) {
//   let emptyArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         emptyArr.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return emptyArr;
// }

// console.log(findPairs([1, 2, 3, 4, 5], 5));
// console.log(findPairs([11, 2, 8, 9, 1, 7], 10));

//---------------------- 7 - vazifa -------------------

// function findPalindromes(n1, n2) {
//   let xarr = [];
//   let carr = [];
//   for (let i = n1; i <= n2; i++) {
//        if(Number(i)){
//        let a = Number(i.toString().split("").reverse().join(""))
//        xarr.push(a)
//        }
//       if(xarr.includes(i)){
//         carr.push(i)
//       }
//   }
//   return carr
// }
// console.log(findPalindromes(100, 150));
// console.log(findPalindromes(250, 293));

//-------------------- 8 - vazifa -------------------

//--------------------- 9 - vazifa ---------------

//   function minMaxDifference(numbers){
//     let min = Math.min(...numbers)
//     let max = Math.max(...numbers)
//     return max - min
// }
// console.log(minMaxDifference([3, 1, 4, 1, 5, 9]));
// console.log(minMaxDifference([11, 14, 55, 23]));

//------------------- 10 - vazifa ------------------

// -------------------------- extra tasks --------------------

//----------------------- 1 - task -----------------------

// function mostFrequentChar(word) {
//     let newArr = word.split("")
//   let obj = {};
//   let emptyArr = [];
//   for (const item of newArr) {
//     if (obj[item]) {
//       obj[item] += 1;
//     } else {
//       obj[item] = 1;
//     }
//   }
//   for (const key in obj) {
//      emptyArr.push(obj[key])

//   }
//  let max = Math.max(...emptyArr)
//   return Object.keys(obj).find(key => obj[key] === max)
//     }
// console.log(mostFrequentChar("javascript"));
// console.log(mostFrequentChar("laptop"));

//------------------- 2 - task --------------

// function fibonacciSequence(n){
//     let readyArr = [0, 1]
//     for (let i = 0; i <= readyArr.length; i++) {
//         let sum =  readyArr[readyArr.length - 1 - i] += readyArr[readyArr.length - 2]
//          readyArr.push(sum)
//          if(readyArr.length === n){
//           break
//          }
//     }
//     return [...new Set(readyArr.sort((a, b) => a - b))]
// }
// console.log(fibonacciSequence(10));
// console.log(fibonacciSequence(12));

//--------------------- 3 - task --------------------

// function removeVowels(words) {
//   let letters = ["a", "i", "u", "e", "o"];
//   let newWords = words.split("")
//   let a = "";
//   for (let i = 0; i < letters.length; i++) {
//     for (let j = 0; j < newWords.length; j++) {
//       if (letters[i] === newWords[j]) {
//            delete newWords[j]
//       }
//     }
//   }
//   return newWords.join("")
// }
// console.log(removeVowels("salom dunyo"));
// console.log(removeVowels("she is waiting"));

//------------------ 4 - task ------------------

// function minSumPair(arrayNums){
//     arrayNums.sort((a, b) => a - b)
//     return arrayNums[0] += arrayNums[1]
// }
// console.log(minSumPair([3, 8, 5, 2, 7]));
// console.log(minSumPair([1, 90, 15, 12, 7]));
