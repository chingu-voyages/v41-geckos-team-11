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
		skills,
	} = resumeData;

	console.log(resumeData);

	return (
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
			</div>
			<h3 className='first-template__title'>Professional Summary</h3>
			<hr class='divider' />
			<div className='first-template__about'>
				<p className='first-template__bio'>{bio}</p>
			</div>
			<h3 className='first-template__title'>Skills</h3>
			<hr class='divider' />
			<ul className='first-template__skills'>
				{skills.map((skill) => (
					<li key={skill.id}>
						<p>{skill.text}</p>
					</li>
				))}
			</ul>
			<h3 className='first-template__title'>Work Experience</h3>
			<hr class='divider' />
			<div className='first-template__work'></div>
			<h3 className='first-template__title'>Education</h3>
			<hr className='divider' />
			<ul className='first-template__edu'>
				{education.map((el) => (
					<li>
						<h4>{el.degree}</h4>
						<p>
							{el.university}, {el.course}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TemplateOne;
