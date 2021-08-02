import React from 'react';

const TransactionForm = () => {
    return (
        <div className="form">
            <input type="text" id="t-name" placeholder="Name of transaction" />
            <input type="number" id="t-amount" placeholder="Transaction amount" />
            <button id="add-btn"> Add Funds <i className="bi bi-plus-square"></i></button>
            <button id="sub-btn"> Subtract Funds <i className="bi bi-dash-square"></i></button>
        </div>
    )
}

export default TransactionForm;