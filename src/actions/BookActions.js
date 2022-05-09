import useLocalStorage from '../hooks/useLocalStorage'
import { BooksContext } from '../context/BooksContext'
import { useContext } from 'react'

export const getBooksFromList = (listId) => {

}

export const getAllLists = () => {
  return JSON.parse(localStorage.getItem('lists'));
}

export const addNewList = (list) => {
  const lists = getAllLists()
  lists.push(list)
  localStorage.setItem('lists', JSON.stringify(lists));
}

