import React from "react";
import '../styles/Expenses.css';

const Expenses: React.FC = () => {
    return (
        <div className="expenses-page">
            <div className="header">
                <h1>Expenses</h1>
                <div className="header-buttons">
                    <button className="add-expense-button">+ New Expense</button>
                    <button className="filter-expenses-button">F</button>
                    <button className="extra-button">E</button>
                </div>
            </div>
            <hr className="expenses-divider" />

            <div className="expenses-list">
                <div className="expenses-list-header">
                    <div className="expense-item">DETAILS</div>
                    <div className="expense-item">CATEGORY</div>
                    <div className="expense-item">AMOUNT</div>
                    <div className="expense-item">DATE</div>
                </div>

                <div className="expenses-list-row">
                    <div className="expense-item">Coffee</div>
                    <div className="expense-item">Food</div>
                    <div className="expense-item">$3.50</div>
                    <div className="expense-item">2025-07-31</div>
                </div>

                <div className="expenses-list-row">
                    <div className="expense-item">Coffee</div>
                    <div className="expense-item">Food</div>
                    <div className="expense-item">$3.50</div>
                    <div className="expense-item">2025-07-31</div>
                </div>
            </div>
        </div>
    );
}

export default Expenses;