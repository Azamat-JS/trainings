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
//------------------------------------ find errors --------------




