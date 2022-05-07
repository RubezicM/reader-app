import React, { useContext, useEffect, useState } from 'react';
import { searchForBooks } from '../../helpers/fetchHelpers'
import { BooksContext } from '../../context/BooksContext'
import useDebounce from '../../hooks/Debouncer'

const MyComponent = () => {
  const { dispatch } = useContext(BooksContext)
  const [term, setTerm] = useState('')
  const debouncedValue = useDebounce(term, 1000)
  const [isSearching, setIsSearching] = useState(false)


  useEffect(() => {

    if (!isSearching) return

    async function fetchBooks () {
      // setting loading screen
      dispatch({ type: 'SET_LOADING' })

      // resetting search display
      dispatch({ type: 'REMOVE_SEARCH_RESULTS' })

      const results = await searchForBooks(debouncedValue)
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: results })
    }

    fetchBooks()

  }, [debouncedValue])

  const handleSearch = (e) => {

    setTerm(e.target.value)
    setIsSearching(true)
  }


  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search for a book" name="search" onKeyUp={handleSearch}/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent;
