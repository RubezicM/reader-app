import React from 'react';
import { useSelector } from 'react-redux'
import Spinner from '../Spinner/Spinner'
import styled from 'styled-components'
import BookItem from '../Book/BookItem'

const Results = styled.div`
  margin-top:25px;
  min-height: 400px;
  padding-bottom: 40px;
`

const SearchResults = () => {

  const { searchResults, loading } = useSelector((state) => state.search)

  return (
    <Results>
      {
        loading &&
        <Spinner/>
      }

      {Object.keys(searchResults).length > 0 &&
      searchResults.docs.map((book) => {
        return (
          <BookItem
            key={book._version_}
            book={book}
          />
        )
      })
      }
    </Results>
  )
}

export default SearchResults;
