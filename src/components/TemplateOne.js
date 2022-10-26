function TemplateOne({ pickedTemplate, resumeData }) {
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
		<div className={pickedTemplate}>
			<h2 className={`${pickedTemplate}__name`}>
				{firstName} {lastName} CV
			</h2>
			<h3 className={`${pickedTemplate}__title`}>{title}</h3>
			<div className={`${pickedTemplate}__details`}>
				<p>{location}</p>
				<p>{phone}</p>
				<a href={`mailto:${email}`}>{email}</a>
			</div>
			<div className={`${pickedTemplate}__social`}>
				<p>website: </p>
				<a href={socialWebsite}>{socialWebsite}</a>
				<p>linkedin: </p>
				<a href={linkedin}>{linkedin}</a>
			</div>
			<h3 className={`${pickedTemplate}__title`}>Professional Summary</h3>
			<div className={`${pickedTemplate}__about`}>
				<p className={`${pickedTemplate}__bio`}>{bio}</p>
			</div>
			<h3 className={`${pickedTemplate}__title`}>Work Experience</h3>
			<div className={`${pickedTemplate}__work`}></div>
			<h3 className={`${pickedTemplate}__title`}>Education</h3>
			<ul className={`${pickedTemplate}__edu`}>
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
