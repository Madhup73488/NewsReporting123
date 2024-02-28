// Navbar.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path, { state: { remount: true } });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: '#f08508' }} onClick={() => handleNavigation('/')}>
                        NewsReporting123
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" onClick={() => handleNavigation('/business')}>
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" onClick={() => handleNavigation('/entertainment')}>
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" onClick={() => handleNavigation('/health')}>
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" onClick={() => handleNavigation('/science')}>
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" onClick={() => handleNavigation('/sports')}>
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" onClick={() => handleNavigation('/technology')}>
                                    Technology
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
