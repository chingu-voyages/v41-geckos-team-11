import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		formState: {},
		style: '',
	},
	reducers: {
		changeFormState: (state, action) => {
			console.log(action, state);
			state.formState = action.payload;
		},
		pickTemplate: (state, action) => {
			state.style = action.payload;
		},
	},
});

export const { changeFormState, pickTemplate } = resumeSlice.actions;
export default resumeSlice.reducer;
