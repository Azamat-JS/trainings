// --------------- object assign
// const target = {a: 1, b:3}
// const source = {b: 4, c:5}

// const targetNew = Object.assign(target, source)
// console.log(target);
//------------------------
const person = {
    isMarried:true,
    printIntroduction: function(){
        console.log(`My name is ${this.name}, and I am ${this.age} years old`);        
    }
}

const me = Object.create(person)
me.name = "Azamat"
me.isMarried = true
me.age = 29
me.printIntroduction()