import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper'
import {Link} from "react-router-dom";

const MainHeader = styled.header`
  height: 55px;
  background-color: #409D69;
`

const Header = () => {
  return (
    <MainHeader>
      <Wrapper>
        <h1><Link to={'/'}>Reader App</Link></h1>
      </Wrapper>
    </MainHeader>
  );
};

export default Header;
