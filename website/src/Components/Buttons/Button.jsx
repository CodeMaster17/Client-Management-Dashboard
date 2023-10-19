import React from 'react';

const Button = ({ primary, btngradient, large, small, onClick, children }) => {
    const buttonClasses = `
    inline-block  rounded-sm text-white
    ${primary ? 'bg-darkOrange' : ''}
    ${btngradient ? 'bg-buttonGradient' : ''}
    ${small ? ' px-4 py-4  text-lg' : ''}
    ${large ? ' px-12 py-4  text-sm' : ''}


  `;

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
