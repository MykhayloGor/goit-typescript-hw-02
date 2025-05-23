import React from 'react';
import type { ImageCardProps } from '../../App/App.types';
import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }: ImageCardProps): React.JSX.Element => {
  return (
    <div className={s.imageCard} onClick={onClick}>
      <img 
        src={image.urls.small} 
        alt={image.alt_description || "Unsplash image"} 
        className={s.imageCardImg}
        loading="lazy"
      />
      <div className={s.imageCardOverlay}>
        <div className={s.imageCardInfo}>
          <p className={s.imageCardAuthor}>{image.user.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;