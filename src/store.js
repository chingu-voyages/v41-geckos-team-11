import { configureStore } from '@reduxjs/toolkit'
import resumeReducer from './reducers/resumeSlice';

export default configureStore({
  reducer: {
    resume: resumeReducer
  },
})