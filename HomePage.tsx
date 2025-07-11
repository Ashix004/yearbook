import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;

