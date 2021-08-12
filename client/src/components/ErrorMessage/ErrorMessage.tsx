import React from 'react';

const ErrorMessage: React.FC = (props) => {
  const {message} = props;


  return (
    <div className="errorContainer">
      <p>{message}</p>
    </div>
  );
};
