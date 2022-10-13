import { createSlice } from '@reduxjs/toolkit'

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    name: "",
    style: ""
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    },
    pickTemplate: (state, action) => {
      state.style = action.payload   
    }
  },
})

export const { changeName, pickTemplate } = resumeSlice.actions
export default resumeSlice.reducer