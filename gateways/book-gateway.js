let books = [];
let nextBookId = 1;

module.exports.addBookGateway = (data) => {
    const book = {
        book_id: nextBookId++,
        ...data
    };
    books.push(book);
    return book.book_id;
}

module.exports.getAllBookGateway = () => {
    return books;
}

module.exports.getBookByIdGateway = (id) => {
    const book = books.find(b => b.book_id === id);
    return book;
}

module.exports.updateBookGateway = (id) => {
    const book = books.find(b => b.book_id === id);
    return book;
}

module.exports.deleteBookGateway = (id) => {
    const bookIndex = books.findIndex(b => b.book_id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        return true
    } else {
        return false
    }
}