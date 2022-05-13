import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { addBookToList, removeBookFromTheList } from '../../redux/reducers/listSlice'
import { useDispatch, useSelector } from 'react-redux'
import AddNewListButton from '../List/AddNewListButton'
import arrowdown from '../../assets/icons/arrow_down.png'
import { FaCheck } from 'react-icons/fa'


const BookCta = styled.div`
    color: #fff;
    -webkit-font-smoothing: antialiased;
    width: 140px;
    position: relative;
    font-size:14px;
    
    & .buttonHolder {
    display:flex;
    background-color: #409D69;
    height: 20px;
    }
    
`

const MainButton = styled.button`
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      border: 0;
    background-color: #409D69;
    color: white;
`

const ButtonIcon = styled.span`
    background-color: ${props => props.hovered ? '#317650' : '#409D69'};
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .2s;
    
    &:hover {
      background-color: #317650; 
    }
`

const Dropdown = styled.li`
   display: ${props => props.opened ? 'block' : 'none'};
   position: absolute;
   left: 0;
   top: 20px;
   max-height: 250px;
   overflow: hidden;
   width: 180px;
   color: black;
   border: 1px solid #ccc;
   z-index: 9;
   padding: 10px 0;
   background-color: white;
   & > ul {
    margin: 5px 0 0 0;
   }
`

const DropdownItem = styled.li`
  padding: 0 10px;
  height: 20px;
  cursor: pointer;
  display:flex;
  align-items: center;
  background-color: ${props => props.added ? '#409D69' : 'white'};
  color: ${props => props.added ? 'white' : '#181818'};
  justify-content: space-between;
  
  &:hover {
    background: #ccc;
  }
`
const AddToListButton = ({ book, manageBook }) => {
  const dispatch = useDispatch()
  const [menuOpened, setMenuOpened] = useState(false)
  const { myLists } = useSelector((state)=>state.lists)
  const [lists,setLists] = useState({})
  const bookId = book._version_

  const addBook = (e) => {
    const listId = e.target.dataset.id
    if (lists[listId].books.hasOwnProperty(bookId)) {
      dispatch(removeBookFromTheList({ listId, book }))
    } else {
      dispatch(addBookToList({ listId, book }))
    }
  }

  useEffect(()=>{
    let _list = {}

    myLists.forEach((list)=> {_list[list.id] = { ...list}})
    setLists((lists)=>({
      ...lists,
      ..._list
    }))
  },[myLists])

  const checkIfBookInList = (list, bookId) => {
    return list.books.hasOwnProperty(bookId)
  }

  return (
    <BookCta onMouseEnter={() => setMenuOpened(true)}
             onMouseLeave={() => setMenuOpened(false)}>
      <ul>
        <li className="buttonHolder">
          {manageBook ?
            <MainButton className={'mainButton'}>Manage Book</MainButton>
            :
            <MainButton className={'mainButton'}>Add book</MainButton>
          }

          <ButtonIcon hovered={menuOpened}>
            <img src={arrowdown} alt=""/>
          </ButtonIcon>
        </li>
        <Dropdown opened={menuOpened}>
          <ul>
            {Object.keys(lists).map((key) => {
              const list = lists[key]
              const isInList = checkIfBookInList(list, bookId)
              return (
                <DropdownItem key={list.id}
                              data-id={list.id}
                              onClick={addBook}
                              added={isInList}>{list.title} {isInList ?  <FaCheck color={'white'}/>: null}
                </DropdownItem>
              )
            })}
            <DropdownItem>
              <AddNewListButton opened={menuOpened} />
            </DropdownItem>
          </ul>
        </Dropdown>
      </ul>
    </BookCta>
  );
};

export default AddToListButton;
