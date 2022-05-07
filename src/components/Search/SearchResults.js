import React, { useState, useContext, useEffect } from 'react';
import useDebounce from '../../hooks/Debouncer'
import { BooksContext } from '../../context/BooksContext'
import Spinner from '../Spinner/Spinner'

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
          return (
            <p>{book.title}</p>
          )
        })
      }
    </>
  );
};

export default SearchResults;
