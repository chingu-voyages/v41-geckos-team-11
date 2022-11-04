// import './styles/theme.scss';
// import './styles/header.scss';
import './App.scss';
import LandingPage from './components/LandingPage';
import ResumeBuilder from './features/resume/ResumeBuilder';
import Education from './features/resume/Education';
import WorkHistory from './features/resume/WorkHistory';
import TemplatePicker from './features/resume/TemplatePicker';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinalView from './features/resume/FinalView';

function App() {
	return (
		<>
			<Header />
			<main>
				<section>
					<Routes>
						<Route exact path='/' element={<LandingPage />} />
						<Route exact path='/resume-builder' element={<ResumeBuilder />} />
						<Route exact path='/education' element={<Education />} />
						<Route exact path='/work-history' element={<WorkHistory />} />
						<Route path='/template' element={<TemplatePicker />} />
						<Route path='/final' element={<FinalView />} />
					</Routes>
				</section>
			</main>
		</>
	);
}

export default App;
