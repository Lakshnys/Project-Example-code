console.log(123);
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList, bookName) {
        let bookListAdd1 = bookList.slice(0, bookList.length);
             bookListAdd1.push(bookName);
        return bookListAdd1;
  // Change code above this line
}

// Change code below this line
function remove (bookList, bookName) {
    let bookListRemove = bookList.slice(0, bookList.length);

  var book_index = bookListRemove.indexOf(bookName);
  if (book_index >= 0) {
    bookListRemove.splice(book_index, 1);
    return bookListRemove;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);

var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList);

var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
console.log(newestBookList);

console.log(bookList);
