import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
	name: 'resume',
	initialState: {
		resumeData: {
			firstName: '',
			lastName: '',
			profession: '',
			phoneNumber: '',
			email: '',
			socialWebsite: 'Twitter',
			socialWebsiteLink: '',
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
		changeProfession: (state, action) => {
			state.resumeData.profession = action.payload;
		},
		changePhoneNumber: (state, action) => {
			state.resumeData.phoneNumber = action.payload;
		},
		changeEmail: (state, action) => {
			state.resumeData.email = action.payload;
		},
		changeSocial: (state, action) => {
			state.resumeData.socialWebsite = action.payload;
		},
		changeSocialLink: (state, action) => {
			state.resumeData.socialWebsiteLink = action.payload;
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

export const {
	changeFirstName,
	changeLastName,
	changeProfession,
	changePhoneNumber,
	changeEmail,
	changeSocial,
	changeSocialLink,
	changeEducation,
	pickTemplate,
} = resumeSlice.actions;
export default resumeSlice.reducer;
