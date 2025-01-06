var Book = /** @class */ (function () {
    function Book(title, author) {
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var deepwork = new Book('Deep work', 'Cal Newport');
console.log(deepwork);
