function getAllBooks() {

    let books = [
        {title: "mybook", author: "krishna", available: true},
        {title: "Kafka", author: "Arjun", available: false},
        {title: "Nodejs", author: "krishnakumar Arjunan", available: true},
        
    ];

    return books;
}

function logFirstAvailable(books) {

    let numberOfBooks = books.length;
    let firstAvaliableBooks = '';
    for (const book of books ) {
        if(book.available) {
            firstAvaliableBooks = book;
            break;
        }
    }
    console.log('First Available book',firstAvaliableBooks);
    console.log('Number Of boooks ',numberOfBooks);
    
}

const allbooks = getAllBooks()
logFirstAvailable(allbooks);