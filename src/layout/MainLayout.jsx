import React from 'react';
import Navber from '../components/shared/navber/Navber';
import { Outlet } from 'react-router';

const MainLayout = () => {
      return (
            <div>
                  <Navber></Navber>
                  <Outlet></Outlet>
            </div>
      );
};

export default MainLayout;