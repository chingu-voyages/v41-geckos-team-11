import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	changeFirstName,
	changeLastName,
	changeProfession,
	changePhoneNumber,
	changeEmail,
	changeSocial,
	changeSocialLink,
	changeEducation,
} from './resumeSlice';

const ResumeBuilder = () => {
	const [education, setEducation] = useState({
		id: '',
		university: '',
		degree: '',
		course: '',
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const resumeData = useSelector((state) => state.resume.resumeData);

	const handleEducationChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setEducation({ ...education, id: Math.random().toString(), [name]: value });
	};

	const nextPage = () => {
		dispatch(changeEducation({ ...education }));
		navigate('/template');
	};

	return (
		<div>
			<form>
				{/* Personal details */}
				<div>
					<label htmlFor='firstName'>First Name</label>
					<input
						onChange={(e) => dispatch(changeFirstName(e.target.value))}
						id='firstName'
						name='firstName'
						value={resumeData.firstName}
					/>
					<label htmlFor='lastName'>Last Name</label>
					<input
						onChange={(e) => dispatch(changeLastName(e.target.value))}
						id='lastName'
						name='lastName'
						value={resumeData.lastName}
					/>
					<label htmlFor='profession'>Profession</label>
					<input
						onChange={(e) => dispatch(changeProfession(e.target.value))}
						id='profession'
						name='profession'
						value={resumeData.profession}
					/>
					<label htmlFor='phoneNumber'>Phone</label>
					<input
						onChange={(e) => dispatch(changePhoneNumber(e.target.value))}
						id='phoneNumber'
						name='phoneNumber'
						value={resumeData.phoneNumber}
					/>
					<label htmlFor='email'>Email</label>
					<input
						onChange={(e) => dispatch(changeEmail(e.target.value))}
						id='email'
						name='email'
						value={resumeData.email}
						type='email'
					/>
					<label htmlFor='social'>Social Website</label>
					<select onChange={(e) => dispatch(changeSocial(e.target.value))}>
						<option value='twitter'>Twitter</option>
						<option value='linkedin'>LinkedIn</option>
						<option value='instagram'>Instagram</option>
					</select>
					<label htmlFor='socialLink'>Link</label>
					<input
						onChange={(e) => dispatch(changeSocialLink(e.target.value))}
						id='socialLink'
						name='socialLink'
						value={resumeData.socialLink}
						type='url'
					/>
				</div>

				{/* Education */}
				<div>
					<label htmlFor='university'>University</label>
					<input onChange={handleEducationChange} id='university' name='university' />
					<label htmlFor='degree'>Degree</label>
					<input onChange={handleEducationChange} id='degree' name='degree' />
					<label htmlFor='course'>Course</label>
					<input onChange={handleEducationChange} id='course' name='course' />
				</div>
			</form>
			<button onClick={nextPage}>next</button>
		</div>
	);
};

export default ResumeBuilder;
