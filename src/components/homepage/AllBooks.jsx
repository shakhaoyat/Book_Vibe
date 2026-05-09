import React, { use } from 'react';

const booksPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
      const books = use(booksPromise);
      console.log(books, 'books');

      return (
            <div className='my-12 container mx-auto'>
                  <h2 className='font-bold text-3xl text-center'>Books</h2>

                  {
                        books.map((book) => {
                              return <div className="card bg-base-100 w-96 shadow-sm">
                                    <figure>
                                          <img
                                                src={book.image}
                                                alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                          <div className='flex items-center gap-2'>
                                                {book.tags.map((tag) => (<div className="badge text-green-500 bg-green-100 font-bold">{tag}</div>))}
                                          </div>
                                          <h2 className="card-title text-2xl">
                                                {book.bookName}</h2>
                                          <p className='font-semibold text-lg'>{book.author}</p>
                                          <p></p>
                                          <div className="card-actions justify-end">
                                                <div className="badge badge-outline">Fashion</div>
                                                <div className="badge badge-outline">Products</div>
                                          </div>
                                    </div>
                              </div>
                        })}
            </div>
      );
};

export default AllBooks;