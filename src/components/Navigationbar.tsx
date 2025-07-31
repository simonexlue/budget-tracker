import React from "react";
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
                <button>Expenses</button>
                <button>Income</button>
                <button>Budget</button>
            </nav>
        </div>
        
    );
};

export default Navigationbar;