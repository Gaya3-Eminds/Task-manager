import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import PrivateTask from './components/PrivateTask';
import ProfessionalTask from './components/ProfessionalTask';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/privatetask" element={<PrivateTask />} />
            <Route path="/professionaltask" element={<ProfessionalTask/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
