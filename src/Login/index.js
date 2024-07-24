import React from 'react';
import './index.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div id='login-section'>
        <div className='login-container'>

            <h1>Welcome Back</h1>
            <h2>LOG IN</h2>

            <form className='container'>

            <label for='user Name'>Username:</label>
            <input type='text' id='username' required />

            <label for='email'>Email:</label>
            <input type='email' id='email' required />
    
            <label for='password'>Password:</label>
            <input type='password' id='password' required />

            <button type='submit'><b>Login</b></button>

            </form>

            <div className='sign-up'>
                
             <h4>Don't have an account? </h4>
             <Link to="/sign-up" className='text'><b>Sign Up</b></Link>
        
            </div>

        </div>

         </div>
    );
};

export default Login;