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
			startSchoolDate1: '',
			endSchoolDate1: '',
			skills: [],
			bio: '',
			linkedin: '',
			location: '',
			title: '',
			phone: '',
			company: '',
			company2: '',
			startWorkDate1: '', 
			endWorkDate1: '',
			jobTitle1: '',
			workDescription1: '',
			startWorkDate2: '', 
			endWorkDate2: '',
			jobTitle2: '',
			workDescription2: '',
			progressBar: 20
		},
		template: '',
	},
	reducers: {
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
		}, 
		changeProgressBar: (state, action) => {
			state.resumeData.progressBar = action.payload
		}, 
		addSkills: (state, action) => {
			const { id } = action.payload;
			const skillsFound = state.resumeData.skills.find((skills) => skills.id === id);
			if (!skillsFound) {
				state.resumeData.skills.push(action.payload);
			}
		}
	},
});

export const {
	changeEducation,
	pickTemplate,
	setResume,
	addSkills,
	changeProgressBar
} = resumeSlice.actions;
export default resumeSlice.reducer;
