import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className="btn btn-success">{children}</button>
        </div>
    );
};

export default Button;