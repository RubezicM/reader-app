import React, { useReducer } from 'react';

export const CreateBooksReducer = (reducer, actions, initialState) => {
  const BooksContext = React.createContext()

  const BooksProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return <BooksContext.Provider
      value={{ ...state, dispatch }}>
      {children}
    </BooksContext.Provider>
  }

  return { BooksContext, BooksProvider }
}
