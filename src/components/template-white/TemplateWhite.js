import { useRef } from 'react';
import TemplateFooter from '../TemplateFooter';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

function TemplateOne({ resumeData }) {
	const pdfExportComponent = useRef(null);
	const exportPDFWithMethod = () => {
		if (pdfExportComponent.current) {
			pdfExportComponent.current.save();
		}
	};
	const {
		firstName,
		lastName,
		email,
		socialWebsite,
		education,
		bio,
		linkedin,
		location,
		title,
		phone,
		skills,
		company,
		company2,
		jobTitle1,
		jobTitle2,
		startWorkDate1,
		startWorkDate2,
		endWorkDate1,
		endWorkDate2,
		workDescription1,
		workDescription2,
	} = resumeData;

	return (
		<>
			<PDFExport
				ref={pdfExportComponent}
				paperSize='auto'
				margin={0}
				fileName={`CV ${firstName} ${lastName}`}
				author={`${firstName} ${lastName}`}
			>
				<div className='first-template'>
					<h2 className='first-template__header'>
						{firstName} {lastName} | {title}
					</h2>
					<div className='first-template__details'>
						<p>
							<span>location:</span> {location}
						</p>
						<p>
							<span>phone:</span> {phone}
						</p>
						<p>
							<span>email:</span> <a href={`mailto:${email}`}>{email}</a>
						</p>
						<p>
							<span>linkedin:</span>
							<a href={linkedin}> {linkedin}</a>
						</p>
					</div>
					<h3 className='first-template__title'>Professional Summary</h3>
					<hr className='divider' />
					<div className='first-template__about'>
						<p className='first-template__bio'>{bio}</p>
					</div>
					<h3 className='first-template__title'>Skills</h3>
					<hr className='divider' />
					<ul className='first-template__skills'>
						{skills.map((skill) => (
							<li key={skill.id}>
								<p>{skill.text}</p>
							</li>
						))}
					</ul>
					<h3 className='first-template__title'>Work Experience</h3>
					<hr className='divider' />
					<div className='first-template__work'>
						<h4>
							{company}, {jobTitle1}, {startWorkDate1} to {endWorkDate1}
						</h4>
						<p>{workDescription1}</p>
						{company2 && (
							<>
								<h4>
									{company2}, {jobTitle2}, {startWorkDate2} to {endWorkDate2}
								</h4>
								<p>{workDescription2}</p>
							</>
						)}
					</div>
					<h3 className='first-template__title'>Education</h3>
					<hr className='divider' />
					<ul className='first-template__edu'>
						{education.map((el) => (
							<li key={el.id}>
								<h4>
									{el.degree}, {el.university}, {el.course}, {el.schoolLocation},{' '}
									{el.educationStartDate} to {el.educationEndDate}
								</h4>
							</li>
						))}
					</ul>
				</div>
			</PDFExport>
			<TemplateFooter exportPDFWithMethod={exportPDFWithMethod} />
		</>
	);
}

export default TemplateOne;
