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

//-------- 3

// function findPalindromes(n1, n2) {
//     let xarr = [];
//     let carr = [];
//     for (let i = n1; i <= n2; i++) {
//          if(i){
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

//---------------------- advanced work with objects

// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
// }

// const half = (function(){
//     return function({ min, max}){
//         return (max + min) / 2
//     }
// })()
// console.log(stats)
// console.log(half(stats));

//----------------------------- matrix --------------------

// function spiralOrder(matrix) {
//   const result = [];
//   if (matrix.length === 0) return result;

//   let top = 0,

//     bottom = matrix.length - 1;
//   let left = 0,
//     right = matrix[0].length - 1;

//   while (top <= bottom && left <= right) {d
//     // Traverse from left to right along the top row
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++; // Move the top boundary down

//     // Traverse downwards along the right column
//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//     }
//     right--; // Move the right boundary left

//     if (top <= bottom) {
//       // Traverse from right to left along the bottom row
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//       }
//       bottom--; // Move the bottom boundary up
//     }

//     if (left <= right) {
//       // Traverse upwards along the left column
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//       }
//       left++; // Move the left boundary right
//     }
//   }

//   return result;
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]


// function count(arr){
//     let obj = {}
//     for(const item of arr){
//         if(obj[item]){
//             obj[item] += 1
//         }else{
//             obj[item] = 1
//         }
//     }
//     return obj
// }
// console.log(count(arr));

//---------------- answers of the competency test ------

 // 1-masala
 function countPalindromTimes() {
    let countOfPalindromTimes = 0;
  
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m++) {
        // Soat va daqiqa sonlarini alohida olish
        let hour1 = Math.floor(h / 10); // Soatning birinchi raqamini ilganman
        let hour2 = h % 10;            // Soatning ikkinchi raqami
        let min1 = Math.floor(m / 10); // Daqiqaning birinchi raqami
        let min2 = m % 10;            // Daqiqaning ikkinchi raqami
  
        // Palindromlikni tekshiramiz
        if (hour1 === min2 && hour2 === min1) {
          countOfPalindromTimes++;
        }
      }
    }
  
    return countOfPalindromTimes;
  }
  
  console.log(countPalindromTimes());
  
  
  // 2-masala
  
  function digitalRoot(n) {
    while (n > 9) {
      let sum = 0;
      let temp = n;
  
      while (temp > 0) {
        sum += temp % 10; // Oxirgi raqamni qo‘shamiz
        temp = Math.floor(temp / 10); // So‘nggi raqamni olib tashlaymiz
      }
  
      n = sum; // Raqamlar yig‘indisini yangi `n` deb belgilaymiz
    }
  
    return n;
  }
  
  console.log(digitalRoot(482)); // Output: 6
  
  // 3-masala
  
  function countOccurrences(arr) {
    const occurrences = {}; // Natijani saqlash uchun obyekt
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (occurrences[element] === undefined) {
        occurrences[element] = 1; // Agar element hali mavjud bo'lmasa, uni 1 ga teng qilamiz
      } else {
        occurrences[element] += 1; // Agar mavjud bo'lsa, qiymatini 1 ga oshiramiz
      }
    }
  
    return occurrences;
  }
  
  console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4]));
  
  // 4-masala
  
  function longestUniqueSubstring(s) {
    let seen = {}; 
    let maxLength = 0;
    let longestSubstring = '';
    let currentSubstring = '';
    let start = 0; // Current substring boshlanish nuqtasi
  
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      // Belgini ko'rilgan bo'lsa, uni substringdan chiqaramiz
      while (seen[char]) {
        seen[s[start]] = false; // Boshlanishdagi belgi obyektni yangilaymiz
        start++; // Boshlanish nuqtasini bitta siljitamiz
      }
      seen[char] = true; // Yangi belgi obyektga qo'shiladi
      currentSubstring = ''; // Yangi substringni to'ldiramiz
  
      // Yangi substringni qo'lda to'ldirish
      for (let j = start; j <= i; j++) {
        currentSubstring += s[j];
      }
  
      // Maksimal uzunlikni yangilash
      if (currentSubstring.length > maxLength) {
        maxLength = currentSubstring.length;
        longestSubstring = currentSubstring;
      }
    }
  
    return longestSubstring;
  }
  
  console.log(longestUniqueSubstring("abcabcbb"));
  // Output: "abc"
  