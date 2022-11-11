// import './styles/theme.scss';
// import './styles/header.scss';
import './App.scss';
import LandingPage from './routes/LandingPage/LandingPage';
import PersonalInfo from './routes/PersonalInfo/PersonalInfo';
import Education from './routes/Education/Education';
import WorkHistory from './routes/WorkHistory/WorkHistory';
import TemplatePicker from './routes/TemplatePicker/TemplatePicker';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinalView from './routes/FinalView/FinalView';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route exact path='/' element={<LandingPage />} />
					<Route exact path='/resume-builder' element={<PersonalInfo />} />
					<Route exact path='/education' element={<Education />} />
					<Route exact path='/work-history' element={<WorkHistory />} />
					<Route path='/template' element={<TemplatePicker />} />
					<Route path='/final' element={<FinalView />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
