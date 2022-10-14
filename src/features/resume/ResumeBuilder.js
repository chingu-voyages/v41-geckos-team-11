import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFormState } from './resumeSlice';

const ResumeBuilder = () => {
	const [formState, setFormState] = useState({
		firstName: '',
		lastName: '',
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	function changeInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		setFormState({
			...formState,
			[name]: value,
		});
	}

	const nextPage = () => {
		dispatch(changeFormState(formState));
		navigate('/template');
	};

	return (
		<div>
			<form>
				<label htmlFor='firstName'>First Name</label>
				<input onChange={changeInput} id='firstName' name='firstName' value={formState.firstName} />
				<label htmlFor='lastName'>Last Name</label>
				<input onChange={changeInput} id='lastName' name='lastName' value={formState.lastName} />
			</form>
			<button onClick={nextPage}>next</button>
		</div>
	);
};

export default ResumeBuilder;
