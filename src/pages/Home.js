import React from 'react';
import Search from '../components/Search/Search'
import SearchResults from '../components/Search/SearchResults'
import Sidebar from '../components/Layout/Sidebar/Sidebar'
import styled from 'styled-components'
import Wrapper from '../components/Layout/Wrapper'

const Aside = styled.div`
  width: 350px;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 560px;
`
function Home () {
  return (
    <Wrapper>
      <Main className={'col-3-of-4'}>
        <Search/>
        <SearchResults/>
      </Main>
      <Aside className={'col-1-of-4'}>
        <Sidebar/>
      </Aside>
    </Wrapper>
  );
}

export default Home;
