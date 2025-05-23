import React from 'react';
import type { ErrorMessageProps } from '../App/App.types';
import s from './ErrorMessage.module.css';

const ErrorMessage = ({ message }: ErrorMessageProps): React.JSX.Element => {
  return (
    <div className={s.errorContainer}>
      <p className={s.errorMessage}>
        {message || 'Something went wrong. Please try again later.'}
      </p>
    </div>
  );
};

export default ErrorMessage;