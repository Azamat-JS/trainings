type User = {name:string, age:number, isStudent:boolean}

const person:User = {
    name:'Ali',
    age:12,
    isStudent: true
}

console.log(person.age);

function identity(arg:any):any{
    return arg
}

class BadGreeter {
    name: string;
    constructor(){
        this.name = 'hello'
    }
}



