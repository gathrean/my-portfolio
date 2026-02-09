import React from 'react';
import './ExternalLink.css';

export function ExternalLink({ href, children, icon }) {
  return (
    <a
      className="external-link-component"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
      {icon && <span className="external-link-icon">{icon}</span>}
      {children}
    </a>
  );
}
