import React from "react";
import '../styles/Income.css';

const Income: React.FC = () => {
    return (
        <div className="income-page">
            <div className="header">
                <h1>Income</h1>
                <div className="header-buttons">
                    <button className="add-income-button">+ New Income</button>
                    <button className="filter-income-button">F</button>
                    <button className="extra-button">E</button>
                </div>
            </div>
            <hr className="income-divider" />

            <div className="income-list">
                <div className="income-list-header">
                    <div className="income-item">DETAILS</div>
                    <div className="income-item">CATEGORY</div>
                    <div className="income-item">AMOUNT</div>
                    <div className="income-item">DATE</div>
                </div>

                <div className="income-list-row">
                    <div className="income-item">Salary</div>
                    <div className="income-item">Job</div>
                    <div className="income-item">$3000.00</div>
                    <div className="income-item">2025-07-31</div>
                </div>

                <div className="income-list-row">
                    <div className="income-item">Freelance Work</div>
                    <div className="income-item">Side Job</div>
                    <div className="income-item">$500.00</div>
                    <div className="income-item">2025-07-31</div>
                </div>
            </div>
        </div>
    );
}

export default Income;