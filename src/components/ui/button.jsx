import React from 'react';

const Button = ({ className, children }) => {
  return (
    <button
      className={`py-3 px-6 text-white 2xl:text-xl font-bold rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
