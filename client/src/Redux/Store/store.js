import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/userSlice'
import  collapseReducer  from '../slice/collapseSlice'
import  eventReducer  from '../slice/EventSlice'
import  toggleReducer  from '../slice/themeSlice'
export const store = configureStore({
  reducer: {
    user : userReducer,
    sidebar : collapseReducer,
    events : eventReducer,
    theme : toggleReducer
  },
})