import { useSelector } from 'react-redux';
import React from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add( faPhone, faGraduationCap, faBriefcase);

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.style);
	const { firstName, lastName, email, phone, education, bio, linkedin, location, web, title } = resumeData;

	return (
	<div className="wrapper">
		<div className={pickedTemplate}>
			<h5 className={`${pickedTemplate}__name`}>
				{firstName} {lastName} CV
			</h5>
			<h5 className={`${pickedTemplate}__title`}>
				{title}
			</h5>
			<div className={`${pickedTemplate}__about`}>
				<p className={`${pickedTemplate}__bio`}>{bio}</p>
			</div>
			<div className={`${pickedTemplate}__section`}>
				<div className={`${pickedTemplate}__basic`}>
					<h1><FontAwesomeIcon icon={"fa-regular", "phone"} /></h1>
					<div>
						<h1 className="header">Contact</h1>
							<p className="header__text header--extra">
								{phone}
							</p>
						<p className="header__text header--extra">
							{location}
						</p>
						<p className="header__email">
							{email}
						</p>
						<p className="header__text">
							{web}
						</p>
						<p className="header__text">
							{linkedin}
						</p>
					</div>
				</div>
				<div className={`${pickedTemplate}__edu`}>
					<h1><FontAwesomeIcon icon={"fa-light", "graduation-cap"} /></h1>
					<div>
						<h1 className="header">Education</h1>
						<ul>
							{education &&
								education.map((el) => (
									<li key={el.university}>
										<p>{el.university}</p>
										<p>Degree: {el.degree}</p>
										<p>Course: {el.course}</p>
									</li>
								))}
						</ul>
					</div>
				</div>
				<div className={`${pickedTemplate}__work`}>
					<h1><FontAwesomeIcon icon={"fa-light", "briefcase"} /></h1>
					<div><h1 className="header">Work Experience</h1></div>
				</div>
			</div>
		</div>
	</div>
	);
};

export default FinalView;
