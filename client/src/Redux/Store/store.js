import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice'
import  collapseReducer  from '../slice/collapseSlice'
export const store = configureStore({
  reducer: {
    user : userReducer,
    sidebar : collapseReducer,
  },
})