//-----------------------------------squared each digit
// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }
//   console.log(squareDigits(432));
  

  //---------------  x = 0 

  // function XO(str) {
//     let newStr = str.toLowerCase()
//     let sumX = 0
//     let sumO = 0
//     for(let i = 0; i < newStr.length; i++){
//      if(newStr[i] === "x"){
//       sumX++
//      }else if(newStr[i] === "o"){
//       sumO++
//      }
//       }
//       if(sumO == sumX){
//         return true
//       }else{
//        return false
//       }
      
//     }
// console.log(XO("XooOxxm"));

//---------------------------- squared each digit

// function squareDigits(num) { 
//     return ~~num.toString().split('').reduce(function(p, c) {
//         return '' + p + (~~c*~~c);
//     }, '');
//   }
//   console.log(squareDigits(4312));

//----------------------  counting population

// function nbYear(p0, percent, aug, p) {
//   let sum = 0
//   while (p0 <= p) {
//     p0 = p0 + p0 * (percent / 100) + aug
//     Math.floor(p0)
//     sum++
//   }
//   return sum
// }

// console.log(nbYear(1500000, 2.5, 10000, 2000000));

//------------------------------------- sorted and unique
// function longest(s1, s2){
//   newStr = s1 + s2
//   newStr.split("").sort((a, b) => a -b)
//   let str = new Set(newStr)
//   return [...str].join("")
// }
// console.log(longest("xcvasxcv", "gfsdxcxcva"));

//--------------------  check last 2 indexes

// function checking(str1, str2){
//  let newStr1 = str1.split("")
//  let newStr2 = str2.split("")
//  if(newStr1[newStr1.length - 1] === newStr2[newStr2.length - 1] && newStr1[newStr1.length - 2] === newStr2[newStr2.length - 2]){
//   return true
//  }
//  else{
//   return false
//  }
// }
// console.log(checking('abc', 'bc'));
// console.log(checking('abcde', 'cde'));
// console.log(checking('abc', 'd'));
// console.log(checking('abcde', 'abc'));
//----------------------------------------- binary
// function countBits(n) {
//   // Convert the number to binary and count the number of '1's
//   return n.toString(2).split('1').length - 1;
// }
// console.log(countBits(1234));
// console.log(countBits(7));
// console.log(countBits(1023));

//------------------ find names ---------------

// function findName(arr){
//   let myPeers = ['Murod', 'Ahmad']
// let newArr = arr.filter((name) => myPeers.includes(name))
// return newArr
//   }

// console.log(findName(['Aziz', 'Odil']));

//------------------ homeworks ---------------

//--------------- 1 - vazifa -----------------------

// function rearrange(arr){
//   arr.sort((a, b) => a - b)
//   let emptyArr = []
//   let left = 0
//   let right = arr.length - 1

//   while(left <= right){
//     if(left <= right){
//       emptyArr.push(arr[right])
//       right--
//     }
//    if(left <= right){
//      emptyArr.push(arr[left])
//      left++
//    }

//   }
//   return emptyArr
// }
// console.log(rearrange([3, 1, 4, 1, 5, 9, 2]));
// console.log(rearrange([38, 61, 24, 14, 51, 19, 20]));

//------------------- 2 - vazifa -------------

// function findUniqueWords(str){
//   let words = str.split(" ")
// let emptyObj = {}
// words.forEach(word => {emptyObj[word] = (emptyObj[word] || 0) + 1});

// return words.filter((item => emptyObj[item] === 1))
// }

// console.log(findUniqueWords("apple banana apple orange banana kiwi orange grape"));

// ----------------------- 3 - vazifa -----------------------

// function findLongestWord(array){
//   let max = []
//   for (let i = 0; i < array.length; i++) {
//      max.push(array[i].length)
//     }
//     let find = Math.max(...max)
//     return array.filter(item => array.indexOf(item) === max.indexOf(find))
// }
// console.log(findLongestWord(['apple', 'banana', 'grapefruit', 'kiwi']));

// ----------------------- 4 - vazifa ----------------------

// function reverseNums(wordNum){
//   let nums = []
//   let ind = []
//   for (let i = 0; i < wordNum.length; i++) {
//     if(Number(wordNum[i] - 0)){
//       nums.push(wordNum[i])
//       ind.push(i)
//     }
    
//   }
//   nums.reverse()
//   let newArr = wordNum.split("")
//   for (let j = 0; j < newArr.length; j++) {
//     newArr[ind[j]] = nums[j]
    
//   }
//   return newArr.join("")
// }

// console.log(reverseNums('ab1cd2ef3gh'));
// console.log(reverseNums('ab3c4e5gh7'));

//------------------ 5 - vazifa ---------------

// function findCommonElements(arr1, arr2){
//   let arr = []
//   for (const element of arr1) {
//     for (const item of arr2) {
//       if(element === item){
//         arr.push(element)
//       }
//     }
//   }
//   return arr
//   }
//   console.log(findCommonElements([1, 2, 3, 4, 5], [2, 9, 4, 11]));
//   console.log(findCommonElements([12, 11, 44, 65], [12, 39, 94, 11]));

//--------------- 6 - vazifa ---------------------

function formatPhoneNumber(numbers){
  const [a, b, c, d, e, f, g, k, l, m] = numbers
  if(numbers.length < 10 || numbers.length > 10){
    console.log("You should fill the input properly");
  }else{
    console.log(`(${a}${b}${c}) ${d}${e}${f}-${g}${k}${l}${m}`)
  }

}
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 5])



