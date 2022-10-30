
function TemplateOne({ resumeData }) {
	
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
	} = resumeData;

	return (
		<div className="first-template">
			<h2 className="first-template__name">
				{firstName} {lastName} CV
			</h2>
			<h3 className="first-template__title">{title}</h3>
			<div className="first-template__details">
				<p>{location}</p>
				<p>{phone}</p>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
			<div className="first-template__social">
				<p>website: </p>
				<a href={socialWebsite}>{socialWebsite}</a>
				<p>linkedin: </p>
				<a href={linkedin}>{linkedin}</a>
			</div>
			<h3 className="first-template__title">Professional Summary</h3>
			<div className="first-template__about">
				<p className="first-template__bio">{bio}</p>
			</div>
			<h3 className="first-template__title">Work Experience</h3>
			<div className="first-template__work"></div>
			<h3 className="first-template__title">Education</h3>
			<ul className="first-template__edu">
				{education.map((el) => (
					<li>
						<p>{el.university}</p>
						<p>{el.degree}</p>
						<p>{el.course}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TemplateOne;
