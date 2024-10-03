import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Notification App</h1>
      <Link to="/notifications">Go to Notifications</Link>
    </div>
  );
}

export default Home;
