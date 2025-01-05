// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;
var randomPerson = function () {
    return Math.random() > 0.5
        ? { name: 'john', study: function () { return console.log('studying'); } }
        : { name: 'mary', login: function () { return console.log('logging in'); } };
};
var person = randomPerson();
console.log(person);
