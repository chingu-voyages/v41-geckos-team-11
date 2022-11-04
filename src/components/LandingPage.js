import { useNavigate } from 'react-router-dom';

function LandingPage() {
	const navigate = useNavigate();
	const start = () => {
		navigate('/resume-builder');
	};
	return (
		<div className='landing-wrapper flex column justify-center align-center'>
			<div className='title-container'>
				<h2 className='title'>Build your resume...</h2>
				<p className='subtitle'>new resume new you</p>
			</div>

			<div className='buttons flex justify-center align-center'>
				<button className='next' onClick={start}>
					Start: resuME Builder
				</button>
			</div>
		</div>
	);
}

export default LandingPage;
