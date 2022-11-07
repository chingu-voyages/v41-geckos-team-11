import { useSelector } from 'react-redux';
import React from 'react';
import TemplateOne from '../../components/TemplateOne';
import TemplateBlue from '../../components/TemplateBlue';
import TemplateThree from '../../components/TemplateThree';
import '../../App.css';

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.template);


	if (pickedTemplate === `first-template`) {
		return (
			<div className="wrapper">
				<TemplateOne pickedTemplate={pickedTemplate} resumeData={resumeData} />
			</div>
		)
	} else if (pickedTemplate === `second-template`) {
		return (
			<div className="wrapper">
				<TemplateBlue pickedTemplate={pickedTemplate} resumeData={resumeData} />
			</div>
		)
	} else if (pickedTemplate === `third-template`) {
		return (
			<div className="wrapper">
				<TemplateThree pickedTemplate={pickedTemplate} resumeData={resumeData} />
			</div>
		)
	} else {
		return (
			<a href="/" className="redirect">Click to Fill Form</a>
		)
	}
};

export default FinalView;
