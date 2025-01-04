///------------ Type Interface =------------------
// type Book = { id: number; name: string; price: number };

// const book1: Book = {
//   id: 1,
//   name: "how to make a cake",
//   price: 23,
// };

// const book2: Book = {
//   id: 2,
//   name: "the secret key",
//   price: 23,
// };

// const discountedBook: Book & { discount: number } = {
//   id: 3,
//   name: "the life of Pi",
//   price: 25,
//   discount: 0.15,
// };

//-------------------- different method ^^^^^^^
// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & {discount:number}

// const book1: Book = {
//   id: 1,
//   name: "how to make a cake",
//   price: 23,
// };

// const book2: Book = {
//   id: 2,
//   name: "the secret key",
//   price: 23,
// };

// const discountedBook: DiscountedBook = {
//   id: 3,
//   name: "the life of Pi",
//   price: 25,
//   discount: 0.15,
// };
//--------------------- type alias another -----------
// const propName = 'age'
// type Animal = {
//     [propName]: number
// }

// let tiger: Animal = {[propName]:5}
// console.log(tiger.age);

//--------------- interface type
interface Book {
    readonly isbn: number;
    title:string,
   readonly author:string,
    genre?:string
    //method
    printAuthor():void;
    printTitle(message:string):string
}

const deepWork: Book = {
    isbn:1243,
    title: 'deep work',
    author: 'cal newport',
    genre: 'self-help',
    printAuthor(){
        console.log(`${this.author} wrote this book`);   
    },
    printTitle(value){
        return `${this.title} ${value}`
    }
}
// deepWork.author = 'kevin'
deepWork.printAuthor()
console.log(deepWork.printTitle("is amazing"));
