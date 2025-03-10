// let sales = [
//     {item:"apple", quantity:3, price: 200},
//     {item:"banana", quantity:1, price: 100},
//     {item:"orange", quantity:5, price: 600},
//     {item:"pear", quantity:3, price: 500},
//     {item:"apricot", quantity:2, price: 300},
// ]

// function calculateTotals(arr){
//     let sum = 0
//     arr.forEach(element => {
//      let res =  element.quantity * element.price
//         sum += res
//         return sum
//     });
//     return sum
// }

// console.log(calculateTotals(sales));

// //----------------------------

// let order = [
//     {name:"apple", quantity:3, price: 200},
//     {name:"banana", quantity:1, price: 100},
//     {name:"orange", quantity:5, price: 600},
//     {name:"pear", quantity:3, price: 500},
//     {name:"apricot", quantity:2, price: 300},
// ]

// function generateReceipt(array){
//     let sum = 0
//     array.forEach(item => {
//         console.log(`The ${item.name}'s total price ${item.quantity * item.price}`);
//         let res = item.quantity * item.price
//         sum += res    
//     })
//     console.log(sum);
    
// }
// generateReceipt(order)

//-----------------------------------

// const passwords = ["Password1234", "klalsjldf98","short", "Vaodikpas_s123", "too_loooong_passsrorowerwerwrwrea123"]

// function validatePasswords(passwords){
//     const regex = /^[a-zA-Z0-9]{8,20}$/;
//     for (let i = 0; i < passwords.length; i++) {
//         if(regex.test(passwords[i])){
//             console.log(`${passwords[i]} is valid`);
            
//         }else{
//             console.log(`${passwords[i]} is invalid`);
            
//         }
//     }
// }

// validatePasswords(passwords)

//------------------------

// const products = [
//     {name: "Laptop", stock: 5},
//     {name: "Phone", stock: 0},
//     {name: "Watch", stock: 2},
//     {name: "Mouse", stock: 0},
// ]

// function checkStockLevels(massiv){
//     for (let i = 0; i < massiv.length; i++) {
//         if(massiv[i].stock > 0){
//             console.log(`${massiv[i].name} is In Stock`);            
//         }else{
//             console.log(`${massiv[i].name} is Out of stock`);            
//         }
//     }
// }

// checkStockLevels(products)

let a = new String('Kl')
console.log(a);
