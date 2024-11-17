// 1 -vazifa

// function stars(n){
//     let result = ""
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if(i === 0 || j === 0 || i === n - 1 || j === n - 1 || i + j === n - 1 || i * j === j + i){
//                 result += " *"
//             }else {
//                 result += "  "
//             }

//         }
//         result += "\n"
//     }
//     return result
// }console.log(stars(10));


// 2- vazifa

// 5 -vazifa

let obj = {
    name: "Usmon",
    age: 22,
    surname: "Aliyev",
    birthYear: "2000",
    money: 4000
}

 for(let key in obj){
    let sum = 0
    if(obj[key] === Number(3)){
        sum += obj[key]
    }
    return sum
}
console.log(sum);


