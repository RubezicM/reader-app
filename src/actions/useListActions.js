import React, { useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { BooksContext } from '../context/BooksContext'

const useListActions = () => {
   const { searchTerm } = useContext(BooksContext)

  const initialLists = [
    {title:'To read'},
    {title:'Done reading'}
  ]

  const lists = JSON.parse(localStorage.getItem('lists'))

  if(!lists) {
    console.log('nema', lists)
    localStorage.setItem('lists', JSON.stringify(initialLists))
    // dispatch({type:'INIT_LISTS', payload:initialLists})
  } else {

  }




}

export {
  useListActions
}
