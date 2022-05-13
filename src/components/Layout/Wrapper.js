import React from 'react';
import styled from 'styled-components';
import * as palette from '../Layout/assets/variables'

const Container = styled.div`
  max-width: ${palette.gridWidth};
  margin: 0 auto;
  padding: 15px;

  &::after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and(min-width: 480px){
    padding: 0 35px;
  }

  div[class^="col-"] {
        float: left;
        &:not(:last-child) {
            margin-right: ${palette.gutterHorizontal};
        }
    
  }
  & .col-1-of-4,
  & .col-3-of-4 {
   float: left;
        &:not(:last-child) {
            margin-right: ${palette.gutterHorizontal};
        }
  }
  
  
  .col-1-of-4 {
        width: calc((100% - ${palette.gutterHorizontal} * 3) / 4);
    }
  .col-3-of-4 {
        width: calc( 3 * ((100% - ${palette.gutterHorizontal} * 3) / 4) + ${palette.gutterHorizontal} * 2);
    }
`

const Wrapper = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Wrapper;
