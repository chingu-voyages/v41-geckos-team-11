import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Header() {
	const progressBar = useSelector((state) => state.resume.resumeData.progressBar);

	const location = useLocation();

	return (
		<Fragment>
			<header>
				<h1>resuME Builder</h1>
			</header>
			{location.pathname === `/` ? (
				<></>
			) : (
				<div className='progress-bar'>
					<h2 className='progress-bar__header'>{`${progressBar}%`}</h2>

					<div className='progress-bar__outer'>
						<div className='progress-bar__inner' style={{ width: `${progressBar}%` }}></div>
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default Header;
