import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Create from './components/create';
import Timesheet from './components/timesheet';
import Notification from './components/notification';
// import Update from './components/update';

function App() {
  return (
    <Router>
      <div className="main ui raised center text container segment">
        <div>
          <h2 className="main-header">Rule Engine</h2>
        
          <Routes>
            <Route path='/create' element={<Create />} />
            <Route path='/timesheet' element={<Timesheet />} />
            <Route path='/notification' element={<Notification />} />
            {/* <Route path='/update' element={<Update />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
