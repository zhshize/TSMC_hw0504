function price(books) {
    if (books.length === 0) return 0;
    if (books.length === 1) return 8;
    if (books.length) {
        const b = books[0];
        let diff = false;
        for (const book of books) {
            if (book !== b) diff = true;
        }
        if (!diff) return books.length * 8;
    }
    if (books.length === 1) return 8;
    return 0;
}

module.exports = price;
