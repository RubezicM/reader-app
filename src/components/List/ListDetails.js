import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../Layout/Wrapper'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import BookItem from '../Book/BookItem'
import Sidebar from '../Layout/Sidebar/Sidebar'

const ListWrapper = styled.div`
 max-width: 560px;
 min-height: 560px;
 padding-bottom: 25px;
 & h3 {
  margin-bottom: 25px;
 }
`

function ListDetails () {
  const { myLists } = useSelector((state) => state.lists)
  const [list, setList] = useState({})
  const [books, setBooks] = useState({})
  const { listId } = useParams()

  useEffect(() => {
    const list = myLists.find((list) => list.id === listId ? { ...list } : null)
    setList(() => ({ ...list }))
    setBooks({ ...list.books })
  }, [myLists, listId])

  return (
    <Wrapper>
      {list &&
      (<ListWrapper className={'col-3-of-4'}>
          <h3>{list.title}</h3>
          {Object.keys(books).map((book) => {
            const _book = books[book]
            return (
              <BookItem className={styles.bookItem}
                          manageBook={true}
                          key={_book._version_}
                          book={_book}/>)
          })}
        </ListWrapper>
      )
      }
      <Sidebar className={'col-1-of-4'}/>
    </Wrapper>
  );
}

const styles = {
  bookItem: {
    maxWidth: '560px'
  }
}
export default ListDetails;
