import React from 'react';
import Search from '../components/Search/Search'
import SearchResults from '../components/Search/SearchResults'
import Sidebar from '../components/Layout/Sidebar/Sidebar'

function Home () {
  return (
    <div className='row'>
      <main>
        <Search/>
        <SearchResults/>
      </main>
      <aside>
        <Sidebar/>
      </aside>
    </div>
  );
}

export default Home;
