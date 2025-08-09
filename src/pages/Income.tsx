import React from "react";
import '../styles/Income.css';
import {income} from '../data/dummyData';

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

                {income.map(income => (
                    <div className="income-list-row" key={income.id}>
                        <div className="income-item">{income.details}</div>
                        <div className="income-item">{income.category}</div>
                        <div className="income-item">${income.amount.toFixed(2)}</div>
                        <div className="income-item">{income.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Income;