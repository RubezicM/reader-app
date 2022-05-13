import { configureStore } from '@reduxjs/toolkit'
import { listSlice } from './reducers/listSlice'
import { searchSlice } from './reducers/searchSlice'

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
  return next => action => {
    const result = next(action)
    localStorage.setItem('applicationState', JSON.stringify(getState()))
    return result
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')) // re-hydrate the store
  }
}

const reducer = {
  search: searchSlice,
  lists: listSlice,
}


const store = configureStore({ reducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),

})

export default store
