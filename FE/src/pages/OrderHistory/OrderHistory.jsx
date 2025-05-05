import React from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
    return (
        <div className="order-history-container">
            <h1>Order History</h1>
            <p>This page will display a history of all your stock orders.</p>
            <div className="placeholder-message">
                <div className="placeholder-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                </div>
                <p>Order history functionality is coming soon!</p>
            </div>
        </div>
    );
};

export default OrderHistory;