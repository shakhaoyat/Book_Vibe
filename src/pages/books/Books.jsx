import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';

const Books = () => {
      // const { storeBooks, wishList } = useContext(BookContext);
      // // console.log(storeBooks, wishList, 'bookContext');

      const [sortingType, setSortingType] = useState();
      return (
            <div className='container mx-auto my-3'>

                  <div className='flex justify-center my-3'>
                        <div className="dropdown dropdown-start">
                              <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
                              <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li onClick={() => setSortingType('pages')}><a>Pages</a></li>
                                    <li onClick={() => setSortingType('rating')}><a>Rating</a></li>
                              </ul>
                        </div>
                  </div>

                  <Tabs>
                        <TabList>
                              <Tab>Read List</Tab>
                              <Tab>Wish List</Tab>
                        </TabList>

                        <TabPanel>
                              <h2><ListedReadList sortingType={sortingType} /></h2>
                        </TabPanel>
                        <TabPanel>
                              <h2><ListedWishList sortingType={sortingType} /></h2>
                        </TabPanel>
                  </Tabs>

            </div>
      );
};

export default Books;