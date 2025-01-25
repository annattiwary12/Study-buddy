import React from 'react';

const Button = ({ label, type = 'button', onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default Button;
