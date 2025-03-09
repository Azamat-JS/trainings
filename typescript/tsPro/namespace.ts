// namespace Account{
//     export function deposit(balance:number, salary:number):number{
//         return balance + salary
//     }

//     export function withdraw(balance:number, payment:number):number{
//         return balance - payment
//     }

//     export const savings:number = 30000
// }

// console.log(Account.deposit(20, 30));
// console.log(Account.withdraw(80, 30));
// console.log(Account.savings);

//-----------------------------

// namespace UserManagement {

//     export interface User{
//         id:number;
//         name:string;
//     }

//     export class UserService {
//         private users: User[] = []

//         addUser(user: User):void{
//             this.users.push(user)
//         }

//         listUsers():User[]{
//             return this.users
//         }
//     }
// }

// const userService = new UserManagement.UserService()
// userService.addUser({id:12, name: 'Ali'})
// userService.addUser({id:13, name: 'Anvar'})
// userService.addUser({id:14, name: 'Umid'})
// console.log(userService.listUsers());

//-------------------------------------

// namespace Organization {
//     export namespace HR {
//         export function hireEmployees(name:string, role:string):void{
//             console.log(`${name} was hired by HR department to ${role} position`);
            
//         }
//     } 

//     export namespace IT{
//         export function setupComputer():void{
//             console.log('Computers was repaired by IT department');
            
//         }
//     }
// }

// Organization.HR.hireEmployees('ALi', 'back-end')
// Organization.IT.setupComputer()

//-----------------------

// namespace Shapes {
//     export function calculateArea(radius:number):number{
//         return Math.PI * radius * radius
//     }
// }

// namespace Shapes {
//     export function calculatePerimeter(radius:number):number{
//           return 2 * Math.PI * radius
//     }
// }

// console.log(Shapes.calculateArea(3));
// console.log(Shapes.calculatePerimeter(3));
