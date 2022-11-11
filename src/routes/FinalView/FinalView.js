import { useSelector } from 'react-redux';
import React from 'react';
import TemplateWhite from '../../components/template-white/TemplateWhite';
import TemplateColor from '../../components/template-color/TemplateColor';
import TemplateGreen from '../../components/template-green/Main';
import '../../App.css';

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.template);

	if (pickedTemplate === `first-template`) {
		return (
			<div className='wrapper'>
				<TemplateWhite pickedTemplate={pickedTemplate} resumeData={resumeData} />
			</div>
		);
	} else if (pickedTemplate === `third-template`) {
		return (
			<div className='wrapper'>
				<TemplateColor pickedTemplate={pickedTemplate} resumeData={resumeData} />
			</div>
		);
	} else if (pickedTemplate === `fourth-template`) {
		return (
			<div className='wrapper'>
				<TemplateGreen pickedTemplate={pickedTemplate} />
			</div>
		);
	} else {
		return (
			<a href='/' className='redirect'>
				Click to Fill Form
			</a>
		);
	}
};

export default FinalView;
