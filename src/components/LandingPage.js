import { useNavigate } from 'react-router-dom';

function LandingPage() {
	const navigate = useNavigate();
	const start = () => {
		navigate('/resume-builder');
	};
	return (
		<div className='landing-page'>
			<h2>Build your resume with us</h2>
			<div className='buttons flex justify-end align-center'>
				<button className='next' onClick={start}>
					Start: resuME Builder
				</button>
			</div>
		</div>
	);
}

export default LandingPage;
