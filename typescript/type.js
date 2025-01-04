// function calculatePrice(price: number, discount?: number): number {
//   return price - (discount || 0);
// }
// let priceAfterDiscount = calculatePrice(80, 20);
// console.log(priceAfterDiscount);
function printStaffDetails(staff) {
    if ('employees' in staff) {
        console.log("".concat(staff.id, " - employee is ").concat(staff.name, " working with ").concat(staff.employees[0].name));
    }
    else {
        console.log("".concat(staff.name, " belongs to ").concat(staff.department, " department"));
    }
}
var alice = { id: 1, name: 'alice', department: 'sales' };
var kevin = { id: 2, name: 'kevin', department: 'management' };
var kate = { id: 2, name: 'kate', employees: [alice, kevin] };
printStaffDetails(alice);
printStaffDetails(kevin);
printStaffDetails(kate);
