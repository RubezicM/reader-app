import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux'
import { addNewList } from '../../redux/reducers/listSlice'
import styled from 'styled-components'


const Form = styled.form`
  & input {
   width: 100%;
  
  }
`
const Button = styled.div`
  width: 100%;
  margin: 11px 0;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`

const AddNewListButton = ({opened}) => {
  const dispatch = useDispatch()
  const [formOpened, setFormOpened] = useState(false)
  const [listName, setListName] = useState('')
  const inputEl = useRef(null);

  useEffect(() => {
    if (formOpened && inputEl.current) {
      inputEl.current.focus();
    }
  }, [formOpened, inputEl]);

  useEffect(()=>{
    setFormOpened(false)
  }, [opened])


  const handleOnSubmit = (e) => {
    e.preventDefault()
    const obj = {
      title: listName
    }

    dispatch(addNewList(obj))
    setFormOpened(false)
  }

  const onAddNewList = (e) => {
    e.preventDefault()
    setFormOpened(true)
  }


  return (
    <>
      {formOpened ? (
        <Form action="#" onSubmit={handleOnSubmit}>
          <input type="text"
                 name={'listName'} ref={inputEl}
                 placeholder='New list name..'
                 value={listName}
                 onChange={(e)=> setListName(e.target.value)}
                 onBlur={(e)=>setFormOpened(false)}
          />
        </Form>
      ) : (
        <Button onClick={onAddNewList}>Add new list</Button>
      )}
    </>
  );
};

export default AddNewListButton;
