import React from 'react'
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
  const { title, edition_count, first_publish_year, author_name, number_of_pages_median } = book

  return (
    <BookItem>
      <h2 className='title'>{title}</h2>
      {
        author_name &&
        <div className='authors'>
          By &nbsp;{author_name.join(', ')}
        </div>
      }
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
