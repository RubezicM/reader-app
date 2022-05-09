import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../Spinner/Spinner'

import SearchItem from './SearchItem'

const SearchResults = () => {

  const { searchResults, loading } = useSelector((state) => state.search)

  useEffect(() => {
    console.log('useeffet', searchResults)
  }, [searchResults])

  return (
    <>
      {
        loading &&
        <Spinner/>
      }

      {Object.keys(searchResults).length > 0 &&
      searchResults.docs.map((book) => {
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
  )
}

export default SearchResults;
