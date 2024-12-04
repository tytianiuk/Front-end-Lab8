import React from 'react';

const Button = ({ className, children }) => {
  return (
    <button
      className={`py-3 px-6 xl:py-4 xl:px-8 text-white font-bold rounded-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
