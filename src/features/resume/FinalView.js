import { useSelector } from 'react-redux';
import React from 'react';
import '../../App.css';

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.style);
	const { firstName, lastName, education } = resumeData;
	return (
		<div className={pickedTemplate}>
			<h5>CV</h5>
			<div className={pickedTemplate}>
				<h2>
					{firstName} {lastName}
				</h2>
				<h3>Education</h3>
				<ul>
					{education &&
						education.map((el) => (
							<li key={el.university}>
								<p>{el.university}</p>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default FinalView;
