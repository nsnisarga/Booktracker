import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/" style={{ color: 'white' }}>
                        BOOKTRACKER
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: 'white' }}>
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Books" style={{ color: 'white' }}>
                                    BOOKS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AddBooks" style={{ color: 'white' }}>
                                    ADD BOOKS
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr style={{ margin: "0" }} /> 
        </>
    );
};
export default NavBar;
