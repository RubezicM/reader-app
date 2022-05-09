import { configureStore, applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loadingReducer from './reducers/loadingReducers'
import searchReducer from './reducers/searchReducer'
import thunk from 'redux-thunk'

const reducer = {
  search: searchReducer
}

const initialState = {}

const middleWare = [thunk]

// const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))

const store = configureStore({ reducer })

export default store
