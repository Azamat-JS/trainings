///------------ Type Interface =------------------
// type Book = { id: number; name: string; price: number };
var deepWork = {
    isbn: 1243,
    title: 'deep work',
    author: 'cal newport',
    genre: 'self-help',
    printAuthor: function () {
        console.log("".concat(this.author, " wrote this book"));
    },
    printTitle: function (value) {
        return "".concat(this.title, " ").concat(value);
    }
};
// deepWork.author = 'kevin'
deepWork.printAuthor();
console.log(deepWork.printTitle("is amazing"));
