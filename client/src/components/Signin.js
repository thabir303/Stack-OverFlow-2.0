//src/components/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Signin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.email || !formData.password) {
            setError('Email and password are required');
            return false;
        }
        return true;
    };

    const handleSignin = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!validateForm()) return;

        try {
            const response = await fetch('http://localhost:8000/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Sign in successful! Redirecting to Home...');
               
                localStorage.setItem('token', data.token);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError(data.message || 'Invalid email or password');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="auth-page fade-in">
            <div className="auth-container">
                <h2>Sign In</h2>
                {successMessage && <div className="success">{successMessage}</div>}
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSignin}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="btn">Sign In</button>
                </form>
                <div className="alternate-option">
                    Don't have an account? <button onClick={() => navigate('/signup')} className="link-button">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Signin;