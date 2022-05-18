function price(books) {
    if (books.length === 0) return 0;
    if (books.length === 1) return 8;
    const counts = [0, 0, 0, 0, 0];
    for (const book of books) {
        counts[book]++;
    }
    let p = 0;

    while(true) {
        let c = 0;
        for (let i = 0; i < 5; i++) {
            if (counts[i] > 0) {
                counts[i]--;
                c++;
            }
        }
        switch (c) {
            case 5:
                p += 8 * 5 * 0.75;
                break;
            case 4:
                p += 8 * 4 * 0.8;
                break;
            case 3:
                p += 8 * 3 * 0.9;
                break;
            case 2:
                p += 8 * 2 * 0.95;
                break;
            case 1:
                p += 8;
                break;
            case 0:
                return p;
        }
    }
}

module.exports = price;
