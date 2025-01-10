// function calculatePrice(price:number, discount?:number):number{
//     return price - (discount || 0)
// }
// const totalPrice = calculatePrice(50, 20)
// console.log(totalPrice);
// -----------------
// function calculateScore(initial, penalty) {
//     if (penalty === void 0) { penalty = 0; }
//     return initial - penalty;
// }
// var afterPenalty = calculateScore(120, 50);
// var afterPen = calculateScore(120);
// console.log(afterPenalty);
// console.log(afterPen);
// var car = { brand: 'ford', model: 'mustang' };
// var product = { name: 'shoes', price: 120 };
// var pupil = { name: "Ali", age: 23 };
// function printName<T extends Student>(input:T):void{
//     console.log(input.name); 
// }
// function printName<T extends Student | Product>(input:T):void{
//     console.log(input.name); 
// }
// function printName(input) {
//     console.log(input.name);
// }
// printName(pupil);
// printName(product);
//------------- default type ------------- 
// interface StoreData<T = any> {
//     data: T[]
// }
// const storeNums:StoreData<number> = {
//     data:[1, 2, 3, 4]
// }
// const randomStuff:StoreData = {
//     data:[12, 'log']
// }

//-------------------------------------
const menu = [
    {name: "Margarita", price: 8},
    {name: "Pepperon", price: 12},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 18}
]

let cashInRegister = 100
let orderQueue = []
let nextOrderId = 1

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}
addNewPizza({name:"tomato added", price: 10})
addNewPizza({name:"cheese and milk", price: 10})
addNewPizza({name:"fried potato added", price: 10})

function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}
placeOrder("Hawaiian")
placeOrder("Veggie")
placeOrder("Hawaiian")
placeOrder("tomato added")
placeOrder("Pepperon")
placeOrder("cheese and milk")
console.log(orderQueue);

// function completedOrder(orderId){
// const foundPizza = orderQueue.find(pizza => orderQueue.indexOf(pizza) === orderId)
// foundPizza.status = "completed"
// const findIndex = orderQueue.indexOf(foundPizza)
// orderQueue.splice(findIndex, 1)
// console.log(foundPizza);
// console.log(orderQueue);
// }

//----- another option for above ^^^^

function completedOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

console.log(completedOrder(1));

