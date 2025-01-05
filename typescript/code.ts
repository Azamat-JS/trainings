// type Dog = { type: "dog"; name: string; bark: () => void };
// type Cat = { type: "cat"; name: string; meow: () => void };
// type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//   if (animal.type === "dog") {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }
//------------------^^^^^^^^^^^^^^^^^
// function makeSound(animal:Animal){
//     if('bark' in animal){
//         animal.bark()
//     }
//     else{
//         animal.meow()
//     }
// }
//---------------------- truthy and falsy ----------------
// function printLength(str:string | null | undefined){
//     if(str ){
//         console.log(str.length);
//     }else{
//     console.log('no string provided');
//     }
// }
// printLength('hey')
// printLength('')
// printLength(undefined)
// printLength(null)
//-------------------------------

// try {
//     throw 'some error'
//     // throw new Error('this is an error')
// } catch (error) {
//     if(error instanceof Error){
//         console.log(`cauth an Error object :${error.message}`);
//     }else{
//         console.log('unknown error...');

//     }
// }
//---------------------------
// function checkInput(input:Date | string):string{
//     if(input instanceof Date){
//         return input.getFullYear().toString()
//     }
//     return input
// }
// const year = checkInput(new Date())
// const random = checkInput('2020-05-05')
// console.log(year);
// console.log(random);
//------------------- type Predicate ------------
type Student = { name: string; study: () => void };

type User = { name: string; login: () => void };

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("studying") }
    : { name: "mary", login: () => console.log("logging in") };
};
// const person = randomPerson()
const person: Person = {
  name: "anvar",
  login: () => console.log("study"),
};

function isStudent(person: Person): person is Student {
  //   return 'study' in person
  return (person as Student).study !== undefined;
}
if (isStudent(person)) {
  person.study();
} else {
  person.login();
}
