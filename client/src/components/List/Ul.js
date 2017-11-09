import React from 'react';

export const Ul = ({ children }) => {
    return (
        <div className="list-overflow-container">
            <ul className="list-group" style={{listStyleType: 'none'}}>
                {children}
            </ul>
        </div>
    );
};