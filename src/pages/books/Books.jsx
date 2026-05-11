import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';

const Books = () => {
      const { storeBooks, wishList } = useContext(BookContext);
      console.log(storeBooks, wishList, 'bookContext');
      return (
            <div className='container mx-auto my-3'>



                  <Tabs>
                        <TabList>
                              <Tab>Read List</Tab>
                              <Tab>Wish List</Tab>
                        </TabList>

                        <TabPanel>
                              <h2><ListedReadList /></h2>
                        </TabPanel>
                        <TabPanel>
                              <h2><ListedWishList /></h2>
                        </TabPanel>
                  </Tabs>

            </div>
      );
};

export default Books;