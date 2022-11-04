import { useSelector } from 'react-redux';
import React from 'react';
import TemplateOne from '../../components/TemplateOne';
import TemplateBlue from '../../components/TemplateBlue';
import '../../App.css';

const FinalView = () => {
	const resumeData = useSelector((state) => state.resume.resumeData);
	const pickedTemplate = useSelector((state) => state.resume.template);

	return (
		<section className='wrapper'>
			{pickedTemplate === `first-template` ? (
				<TemplateOne pickedTemplate={pickedTemplate} resumeData={resumeData} />
			) : (
				<TemplateBlue pickedTemplate={pickedTemplate} resumeData={resumeData} />
			)}
		</section>
	);
};

export default FinalView;
