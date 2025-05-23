import React from 'react';
import type { LoadMoreBtnProps } from '../App/App.types';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps): React.JSX.Element => {
  return (
    <div className={s.loadMoreContainer}>
      <button className={s.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;