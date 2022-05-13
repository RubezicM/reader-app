import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchForBooks } from '../../helpers/fetchHelpers'

export const fetchPosts = createAsyncThunk('fetchSearchResults', async (query,page) => {
  return await searchForBooks(query, page)
})


const searchSlice = createSlice({
  name: 'lists',
  initialState: {
    searchResults: {},
    loading: false
  },
  reducers: {
    setSearchResults: (state, action) => {
      // return { ...state, myLists:  [...state.myLists, action.payload] }
      state.searchResults = action.payload
    },
    removeSearchResults: (state, action) => {
      state.searchResults = {}
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      // Add user to the state array
      state.searchResults = action.payload
      state.loading = false
    })

    builder.addCase(fetchPosts.pending, (state, action) => {
      state.searchResults = {}
      state.loading = true
    })
  },
})

const { reducer, actions } = searchSlice;

const { setSearchResults, removeSearchResults, setLoading, removeLoading } = actions;



export {
  reducer as searchSlice,
  setSearchResults,
  removeSearchResults,
  setLoading,
  removeLoading
}

