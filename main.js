const book = {
    title: "Reactivation",
    author: "Kulyk Stepan"
};


Object.preventExtensions(book);
book.pages = 350;
console.log(book.pages);

delete book.pages;
console.log(book);


Object.freeze(book);

book.title = "Harry Potter and the Philosopher's Stone"
console.log(book.title);

delete book.author;
console.log(book);


Object.seal(book);
book.rating = 5.5;
console.log(book);


const bookCopy = Object.assign ({}, book);
console.log(bookCopy);

delete bookCopy;
console.log(book);






