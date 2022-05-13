import React from 'react'
import styled from 'styled-components'

import AddToListButton from '../Buttons/AddToListButton'

const Book = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  justify-content: space-between;
  border: 1px solid #f7a006;
  
  :not(:last-child) {
    margin-bottom: 20px;
  }
  & .title {
    font-weight: 700;
    font-size: 16px;
    align-self: flex-start;
    margin-bottom: 6px;
  }
  
  & .authors {
    display: flex;
    max-width: 300px;
    font-size: 11px;
  }
  
  & .meta {
    
    &__details span {
    color: #999999;
    font-size: 11px;
    }
    
    & > span:not(:last-child) {
        margin-right: 5px;
    }
  }
`

const BookImage = styled.div`
  margin-right: 10px;
  display:flex;
  
  & > img {
    align-self: center;
  }
`
const PlaceholderImg = styled.div`
  width: 38px;
  height: 38px;
  background-color: gray;
`
const AddBookItem = styled.div`
  margin: 4px 0 0 0;
  display: flex;
  align-items: center;
`

const BookItem = ({ book, manageBook }) => {
  const { title, edition_count, first_publish_year, author_name, number_of_pages_median, notes } = book

  return (
    <Book>
      <BookImage>
        {book.isbn ? (
          <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-S.jpg`} alt=""/>
        ) : (
          <PlaceholderImg/>
        )}

      </BookImage>
      <div className="meta">
        <h2 className="title">{title}</h2>

        <div className="meta__details">
          {
            author_name &&
            <div className="authors">
              By &nbsp;{author_name.join(', ')}
            </div>
          }
          <span>- published {first_publish_year}</span>
          <span>- avg. number of pages {number_of_pages_median}</span>
          <span>- {edition_count} editions</span>
        </div>
      </div>
      {notes &&
      <div>{notes}</div>
      }
      <AddBookItem>
        <AddToListButton book={book} manageBook={manageBook}/>
      </AddBookItem>
    </Book>
  );
}

export default BookItem
