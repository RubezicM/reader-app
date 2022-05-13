import React from 'react';
import ListsSidebar from './ListsSidebar'
import styled from 'styled-components'

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 25px;
`

const Sidebar = () => {

  return (
    <>
      <Title>My shelves</Title>
      <ListsSidebar/>
    </>
  );
};

export default Sidebar;
