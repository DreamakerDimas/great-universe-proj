import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({message}) => {
  return (
    <div className="errorContainer">
      <p>{message}</p>
    </div>
  );
};
