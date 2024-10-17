//src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.email || !formData.password) {
            setError('All fields are required');
            return false;
        }
        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!validateForm()) return;

        try {
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('Signup successful! Redirecting to Sign In...');
                setTimeout(() => {
                    navigate('/signin');
                }, 3000);
            } else {
                setError(data.message || 'An error occurred during signup');
            }
        } catch (err) {
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className="auth-page fade-in">
            <div className="auth-container">
                <h2>Create Account</h2>
                {successMessage && <div className="success">{successMessage}</div>}
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSignup}>

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
                    <button type="submit" className="btn">Sign Up</button>
                </form>
                <div className="alternate-option">
                    Already have an account? <button onClick={() => navigate('/signin')} className="link-button">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;