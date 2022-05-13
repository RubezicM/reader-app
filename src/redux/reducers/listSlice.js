import { createSlice, nanoid } from '@reduxjs/toolkit';




const listSlice = createSlice({
  name: 'lists',
  initialState: {
    myLists: [
      {

        id: nanoid(),
        title:'Want to read',
        books: {},
        numOfBooks: 0,
        kme:{

        }
      },
      {
        id: nanoid(),
        title:'Finished reading',
        books: {},
        numOfBooks: 0
      },{
        id: nanoid(),
        title:'Currently reading',
        books: {},
        numOfBooks: 0
      }
    ],
    loading: false
  },
  preloadedState: {

  },
  reducers: {
    hydrate:(state, action) => {
      return action.payload
    },
    addNewList: (state, action) => {
      let list = action.payload
      list.id = nanoid()
      list.books = []
      list.numOfBooks = 0
      state.myLists.push({ ...list})
    },
    addBookToList: (state, action) => {
      const { listId, book } = action.payload

      const list = state.myLists.find(list=> list.id === listId )
      const bookId = book._version_

      if(!list.books.hasOwnProperty(bookId)) {
        list.books = { ...list.books, [bookId]: {
          ...book
        } }
        list.numOfBooks++
      }
    },
    removeBookFromTheList: (state,action) => {
      const { listId, book } = action.payload

      const list = state.myLists.find(list=> list.id === listId )
      const bookId = book._version_

      if(list.books.hasOwnProperty(bookId)) {
        // list.books = { ...list.books, [bookId]: {
        //     ...book
        //   } }
        delete list.books[bookId]
        list.numOfBooks--
      }

    }
  }
})

const { reducer, actions } = listSlice;

const { addNewList, addBookToList, removeBookFromTheList } = actions;

export {
  reducer as listSlice,
  addNewList,
  addBookToList,
  removeBookFromTheList
}

