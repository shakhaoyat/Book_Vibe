import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedReadList = ({ sortingType }) => {

      const { readList, wishList } = useContext(BookContext);
      console.log(readList, wishList, 'bookContext');

      const [filteredReadList, setFilteredReadList] = useState(readList);

      useEffect(() => {
            if (sortingType) {
                  if (sortingType === 'pages') {
                        const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
                        setFilteredReadList(sortedData);
                  } else if (sortingType === 'rating') {
                        const sortedData = [...readList].sort((a, b) => a.rating - b.rating);
                        setFilteredReadList(sortedData);
                  }
            }
      }, [sortingType, readList]);

      if (readList.length === 0) {
            return (
                  <div className='h-[50vh] bg-gray-100 flex items-center justify-center'>
                        <h2 className='font-bold text-3xl'>Your read list is empty</h2>
                  </div>
            );
      }

      return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {filteredReadList.map((book, ind) => (<BookCard key={ind} book={book} />))}
            </div>
      );
};

export default ListedReadList;