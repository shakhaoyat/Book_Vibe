import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();

const BookProvider = ({ children }) => {

      const [readList, setReadList] = useState([]);
      const [wishList, setWishList] = useState([]);
      const handleMarkAsRead = (currentBook) => {
            //step 1: store id or store book object
            //step 2:where to store
            //step 2: array or collection
            //step 3: if the book is already exist then show a alart or toast
            //step 4: if not then add the book in the array or collection

            const isExistBook = readList.find(book => book.bookId === currentBook.bookId);
            if (isExistBook) {
                  toast.error("You have already marked this book as read");
            } else {
                  setReadList([...readList, currentBook]);
                  toast.success(`${currentBook.bookName} is added to read list`);
            }
            console.log(currentBook, readList, 'currentBook');
      };
      const handleWishList = (currentBook) => {
            //step 1: store id or store book object
            //step 2:where to store
            //step 2: array or collection
            //step 3: if the book is already exist then show a alart or toast
            //step 4: if not then add the book in the array or collection

            const isExistInReadList = readList.find((book) => book.bookId === currentBook.bookId);

            if (isExistInReadList) {
                  toast.error("You have already marked this book as read. You can't add it to wish list");
                  return;
            }

            const isExistBook = wishList.find(book => book.bookId === currentBook.bookId);
            if (isExistBook) {
                  toast.error("You have already marked this book as wish list");
            } else {
                  setWishList([...wishList, currentBook]);
                  toast.success(`${currentBook.bookName} is added to wish list`);
            }
            console.log(currentBook, wishList, 'currentBook');
      };


      const data = {
            readList,
            setReadList,
            handleMarkAsRead,
            wishList,
            setWishList,
            handleWishList
      };
      return (
            <BookContext.Provider value={data}>
                  {children}
            </BookContext.Provider>
      );
};

export default BookProvider;