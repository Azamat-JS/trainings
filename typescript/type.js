// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }
// let priceAfterDiscount = calculatePrice(80, 20);
// console.log(priceAfterDiscount);
var value;
var random = Math.random();
value = random < 0.33 ? 'salom' : random < 0.66 ? 123.456 : true;
function checkValue(value) {
    if (typeof value === 'string') {
        console.log(value.toLocaleLowerCase());
        return;
    }
    if (typeof value === 'number') {
        console.log(value.toFixed());
        return;
    }
    console.log("boolean: ".concat(value));
}
checkValue(value);
