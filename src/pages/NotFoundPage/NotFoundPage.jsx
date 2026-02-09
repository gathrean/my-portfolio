import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.css';
import '../../components/ExternalButton/ExternalButton.css';

export function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="external-button-component">Go Home</Link>
    </div>
  );
}
