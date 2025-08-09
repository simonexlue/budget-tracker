import React from "react";
import '../styles/Expenses.css';
import {expenses} from '../data/dummyData';

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

                {expenses.map(expense => (
                    <div className="expenses-list-row" key={expense.id}>
                        <div className="expense-item">{expense.details}</div>
                        <div className="expense-item">{expense.category}</div>
                        <div className="expense-item">${expense.amount.toFixed(2)}</div>
                        <div className="expense-item">{expense.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Expenses;