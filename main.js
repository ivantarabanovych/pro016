const book = {
    title: "Reactivation",
    author: "Kulyk Stepan"
};

Object.freeze(book);

book.title = "Harry Potter and the Philosopher's Stone"
console.log(book.title);

book.pages = 350;
console.log(book.pages);

delete book.author;
console.log(book);





