import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <div className="error-container">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist, or still not yet implemented.</p>
      <Link to="/" className="home-button">Go Home</Link>
    </div>
  );
};