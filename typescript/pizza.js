//------------------ Pizza ordering app --------------------
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var newPizza = __assign({ id: nextPizzaId++ }, pizzaObj);
    menu.push(newPizza);
    return newPizza;
}
addNewPizza({ name: "tomato added", price: 10 });
addNewPizza({ name: "cheese and milk", price: 10 });
addNewPizza({ name: "fried potato added", price: 10 });
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
