import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import type { ImageGalleryProps } from "../App/App.types";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps): React.JSX.Element => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={s.galleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;