class Book {
    title:string;
    author:string
    constructor(title:string, author:string){
        this.title = title
        this.author = author
    }
}
const deepwork = new Book('Deep work', 'Cal Newport')
console.log(deepwork);
