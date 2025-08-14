import React from "react";
import '../styles/Budgets.css';

const Budgets: React.FC = () => {
    return (
        <div className="budgets-page">
            <div className="header">
                <h1>Budgets</h1>
                <div className="header-buttons">
                    <button className="add-budget-button">+ New Budget</button>
                    <button className="filter-budgets-button">F</button>
                    <button className="extra-button">E</button>
                </div>
            </div>
            <hr className="budgets-divider" />
        </div>
    );
}

export default Budgets;