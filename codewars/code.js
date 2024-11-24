// function squareDigits(num) { 
//     return ~~num.toString().split('').reduce(function(p, c) {
//         return '' + p + (~~c*~~c);
//     }, '');
//   }
//   console.log(squareDigits(4312))

//---------------------

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

//-----------------------