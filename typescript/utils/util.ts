interface User {
    id:number;
    name:string;
    age:number;
    address:string;
}

const partialUserInfo: Partial<User> = {name: "John", age: 12}
console.log(partialUserInfo.age);

const readOnlyUser: Readonly<User> = {id:1, name:'Jane', age:23, address:'main street'}
// readOnlyUser.age = 23

const requiredUser: Required<User> = {id: 1, name: 'Tom', age:34, address: 'backend avenue'}
requiredUser.age = 45

const pickUser: Pick<User, 'name' | 'age'> = {name:'mansur', age:23} 
// pickUser.address = 'poll street'
pickUser.name = 'Ali'

const omitUser: Omit<User, 'address'> = {name: 'Ali', id:1, age:12}

