import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		resumeData: {
			firstName: '',
			lastName: '',
			email: '',
			socialWebsite: '',
			education: [],
			bio: '',
			linkedin: '',
			location: '',
			title: '',
			phone: '',
		},
		template: '',
	},
	reducers: {
		changeBio: (state, action) => {
			state.resumeData.bio = action.payload;
		},
		changeEducation: (state, action) => {
			const { id } = action.payload;
			const educationFound = state.resumeData.education.find((education) => education.id === id);
			if (!educationFound) {
				state.resumeData.education.push(action.payload);
			}
		},
		pickTemplate: (state, action) => {
			state.template = action.payload;
		},
		setResume: (state, action) => {
			state.resumeData[action.payload.name] = action.payload.inputVal
		}
	},
});

export const {
	changeBio,
	changeEducation,
	pickTemplate,
	setResume
} = resumeSlice.actions;
export default resumeSlice.reducer;
