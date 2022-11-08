import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from "react-datepicker";
// import Input from "../../components/Input";

import { changeProgressBar, changeEducation } from './resumeSlice';

function Education() {
	const [education, setEducation] = useState({
		id: '',
		university: '',
		degree: '',
		course: '',
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleEducationChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setEducation({ ...education, id: Math.random().toString(), [name]: value });
	};

	const nextPage = () => {
		dispatch(changeProgressBar(60));
		dispatch(changeEducation({ ...education }));
		navigate('/work-history');
	};
	const prevPage = () => {
		dispatch(changeProgressBar(20));
		navigate('/');
	};

	return (
		<section>
			<form>
				{/* Education */}
				<div>
					<h2>Education</h2>
					<div className='content'>
						<div className='row flex align-center justify-between full-width'>
							<div className='input-block'>
								<label htmlFor='university'>University</label>
								<input onChange={handleEducationChange} id='university' name='university' />
							</div>
						</div>
						<div className='row flex align-center justify-between full-width'>
							<div className='input-block'>
								<label htmlFor='degree'>Degree</label>
								<input onChange={handleEducationChange} id='degree' name='degree' />
							</div>
							<div className='input-block'>
								<label htmlFor='course'>Course</label>
								<input onChange={handleEducationChange} id='course' name='course' />
							</div>
						</div>
					</div>
				</div>
			</form>
			<div className='buttons flex justify-between align-center'>
				<button onClick={prevPage}>Back</button>
				<button className='next' onClick={nextPage}>
					Next: Work History
				</button>
			</div>
		</section>
	);
}

export default Education;
