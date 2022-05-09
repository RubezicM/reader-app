import React, { useContext } from 'react'
import { BooksContext } from '../../context/BooksContext'
import styled from "styled-components"

const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  & .title {
    font-weight: 700;
    font-size: 16px;
    align-self: flex-start;
    margin-bottom: 6px;
  }
  
  & .authors {
    display: flex;
    max-width: 300px;
  }
`

const SearchItem = ({ book }) => {
  const { title, edition_count, first_publish_year, author_name, number_of_pages_median, _version_ } = book
  const { dispatch } = useContext(BooksContext)

  if(!_version_){
    console.log('NEMA')
  }
  const addBook = () => {
    dispatch({ type: 'ADD_BOOK', payload: {...book} })
    console.log('pozvaliiii 0')
  }

  // const addBook1 = () => {
  //   dispatch({ type: 'ADD_BOOK', payload: {...book} })
  //   console.log('pozvaliiii 1')
  // }

  return (
    <BookItem>
      <h2 className='title'>{title}</h2>
      <p>{_version_}</p>
      {
        author_name &&
        <div className='authors'>
          By &nbsp;{author_name.join(', ')}
        </div>
      }
      <button onClick={addBook}>Add to list 0</button>
      {/*<button onClick={addBook1}>Add to list 1</button>*/}
      {/*{props.book.isbn &&*/}
      {/*<img src={`https://covers.openlibrary.org/b/isbn/${props.book.isbn[0]}-S.jpg`} alt=""/>*/}
      {/*}*/}

    </BookItem>
  );
}

const styles = {
  bookItem: {
    display: 'flex'
  }
}

export default SearchItem;
