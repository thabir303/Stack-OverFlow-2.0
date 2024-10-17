import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import NotificationsPage from './pages/NotificationsPage';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/notifications" element={<NotificationsPage />} />
    </Routes>
  </Router>
);

export default App;
