import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css & Profile.css';

const Home = () => {
    return (
        <div className="home fade-in">
            <h1>Welcome to Stack Overflow</h1>
            {/* <p>Find the best answer to your technical question, help others answer theirs</p> */}
            <div className="cta-buttons">
                <Link to="/signup" className="btn btn-primary">Join the community</Link>
                <Link to="/signin" className="btn btn-secondary">Sign In</Link>
            </div>
            {/* <div className="features">
                <div className="feature-card">
                    <h3>Ask questions</h3>
                    <p>Get answers from developers all around the world</p>
                </div>
                <div className="feature-card">
                    <h3>Answer questions</h3>
                    <p>Help others and gain reputation in the community</p>
                </div>
                <div className="feature-card">
                    <h3>Get recognized</h3>
                    <p>Earn badges and build your developer profile</p>
                </div>
            </div> */}
        </div>
    );
};

export default Home;