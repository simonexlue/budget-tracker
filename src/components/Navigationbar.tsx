import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navigationbar.css';

const Navigationbar: React.FC = () => {
    return (
        <div className="navigationbar">
            <div className="header">
                <div className="navbar-profile">
                    <div className="profile-picture"/>
                    <h2>Simone Lue</h2>
                </div>
            </div>

            <nav className="sidebar-nav">
                <button>Dashboard</button>
                <Link to="/expenses" className="nav-link">Expenses</Link>
                <Link to="/income" className="nav-link">Income</Link>
                <button>Budget</button>
            </nav>
        </div>
        
    );
};

export default Navigationbar;