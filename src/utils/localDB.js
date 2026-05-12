const getAllReadListLocalDB = () => {
      const allReadList = localStorage.getItem('readList');
      // console.log(allReadList, 'Read this from localDB');

      if (allReadList) return JSON.parse(allReadList);
      return [];
};

const addReadListToLocalDB = (book) => {
      const allBooks = getAllReadListLocalDB();
      const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
      if (!isAlreadyExist) {
            allBooks.push(book);
            localStorage.setItem('readList', JSON.stringify(allBooks));
      }
};


const getAllWishListLocalDB = () => {
      const allWishList = localStorage.getItem('wishList');
      // console.log(allWishList, 'Read this from localDB');

      if (allWishList) return JSON.parse(allWishList);
      return [];
};

const addWishListToLocalDB = (book) => {
      const allBooks = getAllWishListLocalDB();
      const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
      if (!isAlreadyExist) {
            allBooks.push(book);
            localStorage.setItem('wishList', JSON.stringify(allBooks));
      }
};

export { getAllReadListLocalDB, addReadListToLocalDB, getAllWishListLocalDB, addWishListToLocalDB };