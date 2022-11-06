import { useSelector } from 'react-redux';
import React from 'react';
import TemplateOne from '../../components/TemplateOne';
import TemplateBlue from '../../components/TemplateBlue';
import TemplateThree from '../../components/TemplateThree';
import '../../App.css';

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.template);

	return (
		<div className='wrapper'>
			{pickedTemplate === `second-template` ? (
				<TemplateBlue pickedTemplate={pickedTemplate} resumeData={resumeData}  />
			) : (
				<TemplateThree pickedTemplate={pickedTemplate} resumeData={resumeData} />
			)}
		</div>
	);
};

export default FinalView;
