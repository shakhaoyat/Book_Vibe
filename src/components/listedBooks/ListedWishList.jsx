import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = () => {
      const { wishList } = useContext(BookContext);
      console.log(wishList, 'bookContext');

      if (wishList.length === 0) {
            return (
                  <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                        <h2 className='font-bold text-3xl'>Your wish list is empty</h2>
                  </div>
            );
      }


      return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {wishList.map((book, ind) => (<BookCard key={ind} book={book} />))}
            </div>
      );
};

export default ListedWishList;