import logo from './logo.svg';
import './App.scss';
import ResumeBuilder from './features/resume/ResumeBuilder';
import TemplatePicker from './features/resume/TemplatePicker';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FinalView from './features/resume/FinalView';


function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<ResumeBuilder />} />
          <Route path="/template" element={<TemplatePicker />} />
          <Route path="/final" element={<FinalView />} />
      </Routes>
    </div>
  );
}

export default App;
