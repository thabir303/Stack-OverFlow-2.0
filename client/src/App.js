import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Notifications from './components/Notifications';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 Stack Overflow. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;