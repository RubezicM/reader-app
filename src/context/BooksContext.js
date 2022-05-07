import { CreateBooksReducer } from './BooksReducer'

// Initial state
const initialState = {
  searchTerm: '',
  searchResults: {},
  lists:{
    reading: [
      { title: 'book1' },
      { title: 'book2' }
    ]
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
    default:
      return state
  }
}

export const { BooksContext, BooksProvider } = CreateBooksReducer(BooksReducer, {}, initialState)
