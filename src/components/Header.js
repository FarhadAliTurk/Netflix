import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Netflix Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="netflix-logo"
          />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tv-shows">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/movies">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/new-popular">New & Popular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/my-list">My List</a>
            </li>
          </ul>
        </div>

        {/* Sign In Button */}
        <a href="/signin" className="btn btn-danger btn-sm">Sign In</a>
      </div>
    </nav>
  );
}

export default Header;