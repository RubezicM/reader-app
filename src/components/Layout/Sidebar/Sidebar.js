import React, { useContext, useEffect } from 'react';
import { BooksContext } from '../../../context/BooksContext'
import ListsSidebar from './ListsSidebar'
const Sidebar = () => {

  return (
    <>
      <p>Sidebar</p>
      <ListsSidebar/>
    </>
  );
};

export default Sidebar;
