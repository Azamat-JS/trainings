//------------------ Pizza ordering app --------------------

type Pizza = { id: number; name: string; price: number };
type Order = { id: number; pizza: Pizza; status: "ordered" | "completed" };

let cashInRegister = 100;
let nextOrderId:number = 1;
let nextPizzaId:number = 1

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margarita", price: 8 },
  { id: nextPizzaId++, name: "Pepperon", price: 12 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 18 },
];

let orderQueue: Order[] = [];

function addNewPizza(pizzaObj:Pizza): void {
  pizzaObj.id = nextPizzaId++
  menu.push(pizzaObj)
}
addNewPizza({id: nextPizzaId++,name: "tomato added", price: 10 });
addNewPizza({id: nextPizzaId++,name: "cheese and milk", price: 10 });
addNewPizza({id: nextPizzaId++,name: "fried potato added", price: 10 });

function getPizzaDetails(identifier: string | number): Pizza {
  if (typeof identifier === "number") {
    const foundPizza = menu.find((pizza) => pizza.id === identifier);
    if (!foundPizza) {
      throw new Error(`there is no Pizza with id: ${identifier}`);
    }
    return foundPizza;
  } else {
    const foundPizza = menu.find(
      (pizza) =>
        pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
    );
    if (!foundPizza) {
      throw new Error(`there is no Pizza with name: ${identifier}`);
    }
    return foundPizza;
  }
}

function placeOrder(pizzaName: string):Order | null {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} does not exist in the menu`);
  }
  return null;
}
placeOrder("Hawaiian");
placeOrder("Veggie");
placeOrder("Hawaiian");
placeOrder("tomato added");
placeOrder("Pepperon");
placeOrder("cheese and olive");

function completedOrder(orderId: number):Order | null {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`there is no order with this number: ${orderId}`);
    return null;
  }
  order.status = "completed";
  return order;
}

// const result = getPizzaDetails(3);
// console.log(result);

// console.log(completedOrder(4));
console.log(menu);
