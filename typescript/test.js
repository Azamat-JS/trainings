// type Address = {city:string, street:string, houseNum:number}
var users = [
    { username: "Ruzim", role: "admin" },
    { username: "Jasur", role: "member" },
    { username: "Ruzim", role: "guest" },
];
function fetchUserDetails(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found"));
    }
    return user;
}
console.log(fetchUserDetails("Ruzim"));
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var menu = [
    { id: nextPizzaId++, name: "Margarita", price: 8 },
    { id: nextPizzaId++, name: "Pepperon", price: 12 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 18 },
];
var orderQueue = [];
function addNewPizza(pizzaObj) {
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj);
}
addNewPizza({ id: nextPizzaId++, name: "tomato added", price: 10 });
addNewPizza({ id: nextPizzaId++, name: "cheese and milk", price: 10 });
addNewPizza({ id: nextPizzaId++, name: "fried potato added", price: 10 });
function getPizzaDetails(identifier) {
    if (typeof identifier === "number") {
        var foundPizza = menu.find(function (pizza) { return pizza.id === identifier; });
        if (!foundPizza) {
            throw new Error("there is no Pizza with id: ".concat(identifier));
        }
        return foundPizza;
    }
    else {
        var foundPizza = menu.find(function (pizza) {
            return pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase();
        });
        if (!foundPizza) {
            throw new Error("there is no Pizza with name: ".concat(identifier));
        }
        return foundPizza;
    }
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
    }
    return null;
}
placeOrder("Hawaiian");
placeOrder("Veggie");
placeOrder("Hawaiian");
placeOrder("tomato added");
placeOrder("Pepperon");
placeOrder("cheese and olive");
function completedOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("there is no order with this number: ".concat(orderId));
        return null;
    }
    order.status = "completed";
    return order;
}
// const result = getPizzaDetails(3);
// console.log(result);
// console.log(completedOrder(4));
console.log(menu);
