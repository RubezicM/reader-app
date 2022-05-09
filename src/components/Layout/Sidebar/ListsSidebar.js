import React, { useContext, useEffect, useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { BooksContext } from '../../../context/BooksContext'

const ListsSidebar = () => {
  const { myLists, dispatch } = useContext(BooksContext)
  const initialLists = [
    {title:'To read',books:[],numOfBooks:0},
    {title:'Done reading',books:[],numOfBooks:0}
  ]

  const [lists, setLists] = useLocalStorage('lists',initialLists)

  // useEffect(()=>{
  //   setLists(myLists)
  // },[myLists])

  const addNewList = async () => {
    const obj = {
      title: 'meh',
      books: [],
      numOfBooks: 0
    }

    setLists(()=>{
       return [...lists, {...obj}]
    })

  }

  return (
    <div>
      {lists && lists.map((list)=>{
        return (
          <p>{list.title}/<span>{list.numOfBooks}</span></p>
        )
      })}
      {/*{Object.keys(lists2).length > 0 && lists2.map((list)=>{*/}
      {/*  return (*/}
      {/*    <p>2nd list {list.title}</p>*/}
      {/*  )*/}
      {/*})}*/}
      <button onClick={addNewList}>Add new list</button>
    </div>

  );
};

export default ListsSidebar;
