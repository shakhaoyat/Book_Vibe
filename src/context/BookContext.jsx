import React, { createContext, useState } from 'react';


export const BookContext = createContext();

const BookProvider = ({ children }) => {

      const [storeBooks, setStoreBook] = useState([]);

      const handleMarkAsRead = (currentBook) => {
            //step 1: store id or store book object
            //step 2:where to store
            //step 2: array or collection
            //step 3: if the book is already exist then show a alart or toast
            //step 4: if not then add the book in the array or collection

            const isExistBook = storeBooks.find(book => book.bookId === currentBook.bookId);
            if (isExistBook) {
                  alert("You have already marked this book as read");
            } else {
                  setStoreBook([...storeBooks, currentBook]);
                  alert(`${currentBook.bookName} is added to list`);
            }
            console.log(currentBook, storeBooks, 'currentBook');
      };


      const data = {
            storeBooks, setStoreBook,
            handleMarkAsRead
      };
      return (
            <BookContext.Provider value={data}>
                  {children}
            </BookContext.Provider>
      );
};

export default BookProvider;