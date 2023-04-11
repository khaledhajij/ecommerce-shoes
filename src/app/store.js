import { combineReducers, configureStore } from '@reduxjs/toolkit'
import shoesSlice from './shoesSlice'

const reducer = combineReducers({ shoes: shoesSlice })
const store = configureStore({ reducer })

export default store
