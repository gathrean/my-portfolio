import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';

export function Navbar() {

    return (
        <nav className="navbar">
            <div className="brand logo-home">
                <span className="brand-text">Gathrean Dela Cruz</span>
            </div>
            <ul className="navbar-nav">
                <li>
                    <Link className="nav-item" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/about">About</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/projects">Projects</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};