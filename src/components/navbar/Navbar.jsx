import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/favicon.ico`}/>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;