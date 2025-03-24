/*
Exercise 1: Library Book Organizer

Create a function, organizeBooksByGenre, that takes an array of book objects and 
groups them by genre.

Instructions:
	1.	Each book object will have properties: title, author, and genre.
	2.	Return an object where each key is a genre and its value is an 
        array of books that belong to that genre.

*/

const myBooks = [
  { title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
];

const organizeBooksByGenre = (books) => {
  return books.reduce((acc, book) => {
    // if genre arleady exists push to new object
    if (acc[book.genre]) {
      acc[book.genre].push(book);
    } else {
      // else, create new array with genre of book
      acc[book.genre] = [book];
    }
    return acc;
  }, {}); //start with empty object
};

console.log(organizeBooksByGenre(myBooks));
