import { configureStore } from '@reduxjs/toolkit'
import resumeReducer from './features/resume/resumeSlice';

export default configureStore({
  reducer: {
    resume: resumeReducer
  },
})