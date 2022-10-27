import { useSelector } from 'react-redux';
import React from 'react';
import TemplateOne from '../../components/TemplateOne';
import TemplateTwo from '../../components/TemplateTwo';
import '../../App.css';

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.template);

	return (
		<div className='wrapper'>
			{pickedTemplate === `first-template` ? (
				<TemplateOne pickedTemplate={pickedTemplate} resumeData={resumeData} />
			) : (
				<TemplateTwo pickedTemplate={pickedTemplate} resumeData={resumeData}  />
			)}
		</div>
	);
};

export default FinalView;
