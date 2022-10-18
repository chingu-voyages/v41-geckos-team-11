import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		resumeData: {
			firstName: '',
			lastName: '',
			education: [],
		},
		style: '',
	},
	reducers: {
		changeFirstName: (state, action) => {
			state.resumeData.firstName = action.payload;
		},
		changeLastName: (state, action) => {
			state.resumeData.lastName = action.payload;
		},

		changeEducation: (state, action) => {
			const { id } = action.payload;
			const educationFound = state.resumeData.education.find((education) => education.id === id);
			if (!educationFound) {
				state.resumeData.education.push(action.payload);
			}
		},

		pickTemplate: (state, action) => {
			state.style = action.payload;
		},
	},
});

export const { changeFirstName, changeLastName, changeEducation, pickTemplate } =
	resumeSlice.actions;
export default resumeSlice.reducer;
