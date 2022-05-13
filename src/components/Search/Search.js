import React, { useEffect, useState } from 'react';

import useDebounce from '../../hooks/Debouncer'
import styled from 'styled-components'

// redux
import { useDispatch } from 'react-redux'
import { fetchPosts } from '../../redux/reducers/searchSlice'
import { removeSearchResults } from '../../redux/reducers/searchSlice'

const Input = styled.input`
  width:100%;
  height: 35px;
  padding: 0 10px;
`
const Label = styled.label`
   margin-bottom:20px;
    display: block;
    font-size: 20px;
`

const Search = () => {
  const dispatch = useDispatch()
  const [term, setTerm] = useState('')
  const debouncedValue = useDebounce(term, 450)
  const [isSearching, setIsSearching] = useState(false)


  useEffect(() => {
    if (!isSearching) return
    async function fetchBooks () {
      await dispatch(fetchPosts(debouncedValue,1))
    }

    fetchBooks()

  }, [debouncedValue, isSearching, dispatch])

  useEffect(()=>{
    dispatch(removeSearchResults())
  },[dispatch])


  const handleSearch = (e) => {
    setIsSearching(true)
    setTerm(e.target.value)
  }

  return (
    <form onSubmit={handleSearch}>
      <Label htmlFor="search">
        Search for a book
      </Label>
      <Input type="text"
             placeholder="Book title"
             name="search"
             onKeyUp={handleSearch}/>
    </form>
  )
}
export default Search;
