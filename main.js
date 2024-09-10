const book = {
    title: "Reactivation",
    author: "Kulyk Stepan"
};


Object.preventExtensions(book);
book.pages = 350;
console.log(book.pages);

Object.freeze(book);

book.title = "Harry Potter and the Philosopher's Stone"
console.log(book.title);

Object.seal(book);

delete book.author;
console.log(book);





