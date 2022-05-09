import {
  SET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS,
  SET_LOADING,
  REMOVE_LOADING
} from '../constans/searchConstants'

const INITIAL_STATE = {
  searchResults: {},
  loading: false
}


const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload }
    case REMOVE_SEARCH_RESULTS:
      return { ...state, searchResults: {} }
    case SET_LOADING:
      console.log('u switchu')
      return { ...state, loading: true }
    case REMOVE_LOADING:
      console.log('remove loading')
      return { ...state, loading: false }
    default:
      return state
  }
}

export default searchReducer
