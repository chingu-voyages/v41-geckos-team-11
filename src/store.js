import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice';
import resumeReducer from './features/resume/resumeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    resume: resumeReducer
  },
})