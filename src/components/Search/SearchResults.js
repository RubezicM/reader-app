import React, { useState, useContext, useEffect } from 'react';
import useDebounce from '../../hooks/Debouncer'
import { BooksContext } from '../../context/BooksContext'

import Spinner from '../Spinner/Spinner'

import SearchItem from './SearchItem'

const SearchResults = () => {

  const { searchResults, isLoading } = useContext(BooksContext)
  const [term, setTerm] = useState('')
  const debouncedValue = useDebounce(term, 1000)


  useEffect(()=>{
    console.log('useeffet',searchResults)
  },[searchResults])

  return (
    <>
      {
        isLoading &&
        <Spinner/>
      }

      { Object.keys(searchResults).length > 0 &&
        searchResults.docs.map((book)=>{
          console.log(book)


          return (
            <SearchItem
              key={book._version}
              book={book}
            />
          )
        })
      }
    </>
  );
};

export default SearchResults;
