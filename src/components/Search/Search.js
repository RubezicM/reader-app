import React, { useEffect, useState } from 'react';

import useDebounce from '../../hooks/Debouncer'

// redux
import { useDispatch } from 'react-redux'
import { setSearchResults } from '../../redux/actions/searchActions'

const Search = () => {

  const dispatch = useDispatch()

  const [term, setTerm] = useState('')
  const debouncedValue = useDebounce(term, 450)
  const [isSearching, setIsSearching] = useState(false)



  useEffect(() => {

    if (!isSearching) return
    async function fetchBooks () {
      await dispatch(setSearchResults(debouncedValue,1))
    }

    fetchBooks()

  }, [debouncedValue])



  const handleSearch = (e) => {
    setIsSearching(true)
    setTerm(e.target.value)
  }

  return (
    <form onSubmit={handleSearch}>
      <input type="text"
             placeholder="Search for a book name"
             name="search"
             onKeyUp={handleSearch}/>
    </form>
  );
};

export default Search;
