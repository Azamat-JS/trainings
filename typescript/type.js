// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }
// let priceAfterDiscount = calculatePrice(80, 20);
// console.log(priceAfterDiscount);
var theme;
theme = 'light';
function setTheme(t) {
    theme = t;
    return theme;
}
console.log(setTheme('dark'));
