// import Sidebar from "./Sidebar";
import './App.css';
import Login from './Login'; 
import Rewards from './Rewards';
import SplashScreen from './SplashScreen'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/splashscreen" element={<SplashScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<SplashScreen />} /> 
            </Routes>

            <Rewards/>
        </Router>

        
    );
}

export default App;

