import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const SplashScreen = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='logo-section'>
            <img src='/Images/logo.png' alt='Logo' className='upcycle' />
            <p>Loop & Wear</p>
        </div>
    );
};

export default SplashScreen;