import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		resumeData: {
			firstName: '',
			lastName: '',
			education: [],
			bio: '',
			location: '',
			web: '',
			title: '',
			phone: ''
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
		changePhone: (state, action) => {
			state.resumeData.phone = action.payload;
		},
		changeBio: (state, action)=> {
				state.resumeData.bio = action.payload;
		},
		changeLinkedin: (state, action)=> {
				state.resumeData.linkedin = action.payload;
		},
		changeLocation: (state, action)=> {
				state.resumeData.location = action.payload;
		},
		changeWeb: (state, action) => {
			state.resumeData.web = action.payload;
		},
		changeTitle: (state, action) => {
			state.resumeData.title = action.payload;
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

export const { changeFirstName, changeLastName, changeBio, changeEducation, pickTemplate, changeLocation, changeLinkedin , changeWeb, changeTitle, changePhone} =
	resumeSlice.actions;
export default resumeSlice.reducer;
