import {
  SET_SEARCH_RESULTS,
  REMOVE_SEARCH_RESULTS,
  SET_LOADING,
  REMOVE_LOADING
} from '../constans/searchConstants'

import { searchForBooks } from '../../helpers/fetchHelpers'

export const setSearchResults = (query) => async dispatch => {
  try {
    dispatch({type:REMOVE_SEARCH_RESULTS})
    console.log('srchamo')

    dispatch({type:SET_LOADING})
    console.log('trebalo bi da se pojavi')
    const results = await searchForBooks(query, 1)
    console.log('prosli smo')
    dispatch({type:REMOVE_LOADING})
    dispatch({type:SET_SEARCH_RESULTS, payload: results })

  } catch (err) {
    console.log('Error in search', err)
    dispatch({type:REMOVE_LOADING})
  }



}
export const remove_search_results = () => dispatch => {

}

export const setLoading = () => dispatch => {
  dispatch({type: SET_LOADING })
}

export const removeLoading = () => dispatch => {
  dispatch({type: REMOVE_LOADING})
}
