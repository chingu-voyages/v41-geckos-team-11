import { useSelector } from 'react-redux';
import React from 'react';
import '../../App.css';

const FinalView = () => {
	const formState = useSelector((state) => state.resume.formState);
	const pickedTemplate = useSelector((state) => state.resume.style);
	const { firstName, lastName } = formState;
	return (
		<div className={pickedTemplate}>
			<h5>CV</h5>
			<div className={pickedTemplate}>
				<h2>
					{firstName} {lastName}
				</h2>
			</div>
		</div>
	);
};

export default FinalView;
