import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice'
import  collapseReducer  from '../slice/collapseSlice'
import  toggleReducer  from '../slice/themeSlice'
import  EventReducers  from '../slice/EventSlice'

export const store = configureStore({
  reducer: {
    user : userReducer,
    sidebar : collapseReducer,
    theme : toggleReducer,
    events : EventReducers
  },
})