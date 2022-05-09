import { CreateBooksReducer } from './BooksReducer'

// Initial state
const initialState = {
  searchTerm: '',
  searchResults: {},
  myLists:[
    // {
    //   title: 'To read',
    //   books: [],
    //   numOfBooks: 0
    // },
    // {
    //   title: 'Finished reading',
    //   books: [],
    //   numOfBooks: 0
    // }
  ],
  books: {
    3299238423: { title: 'book1'}
  },
  isLoading:false
}

const BooksReducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return { ...state, searchResults: action.payload, isLoading: false }
    case 'REMOVE_SEARCH_RESULTS':
      return { ...state, searchResults: {} }
    case 'SET_LOADING':
      return { ...state, isLoading: true }
    case 'UPDATE_LIST':
      return { ...state, myLists: action.payload }
    case 'ADD_BOOK':
      const id = action.payload._version_
      let list = [...state.myLists]
      console.log('MOJA LISTA', list)
      list.push(action.payload)
      console.log('MOJA LISTA 2', list)
      console.log('Lista iz stejta', list)
      return { ...state, books: {...state.books, [id]:{ ...action.payload }} }
    case 'ADD_LIST':
      return { ...state, myLists: [...state.myLists, action.payload] }
    default:
      return state
  }
}

export const { BooksContext, BooksProvider } = CreateBooksReducer(BooksReducer, {}, initialState)
