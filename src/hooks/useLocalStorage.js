import { useState, useEffect, useContext } from "react";
import { BooksContext } from '../context/BooksContext'

const useLocalStorage = (key, defaultValue) => {
  const { dispatch } = useContext(BooksContext)

  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    dispatch({type:'UPDATE_LIST', payload: value})
  }, [value, key, dispatch]);

  return [value, setValue];
};

export default useLocalStorage;
