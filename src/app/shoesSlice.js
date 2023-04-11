import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchShoes = createAsyncThunk('shoes/fetchShoes', async url => {
  const response = await axios.get(url)
  console.log(response.data)
  return response?.data
})

const shoesSlice = createSlice({
  name: 'shoes',
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchShoes.fulfilled, (state, action) => {
      return action.payload.shoes
    })
  }
})

export const shoesSelector = state => state.shoes
export default shoesSlice.reducer
export const {} = shoesSlice.actions
