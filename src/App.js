// import Sidebar from "./Sidebar";
import './App.css';
import Login from './login'; 
import SplashScreen from './splashscreen'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/splashscreen" element={<SplashScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<SplashScreen />} /> 
                <Rewards/>
            </Routes>
        </Router>
    );
}

export default App;

