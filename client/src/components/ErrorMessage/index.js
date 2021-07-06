import React from 'react';

const ErrorMessage = (props) => {
  const {message} = props;


  return (
    <div className="errorContainer">
      <p>{message}</p>
    </div>
  );
};
