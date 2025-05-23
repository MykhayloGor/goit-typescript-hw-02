import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { ClipLoader } from "react-spinners";
import SearchBar from "../../components/SearchBar/SearchBar";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ImageModal from "../../components/ImageModal/ImageModal";
import { fetchImages } from "../../services/api";
import type { Image, ImageResponse } from "./App.types";
import "./App.css";

Modal.setAppElement("#root");

const App = (): React.JSX.Element => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const getImages = async (): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const data: ImageResponse = await fetchImages(query, page);
        setImages((prevImages) =>
          page === 1 ? data.results : [...prevImages, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearchSubmit = (searchQuery: string): void => {
    setQuery(searchQuery);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster position="top-right" />
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          {images.length > 0 && (
            <ImageGallery images={images} onImageClick={handleImageClick} />
          )}
          {isLoading && (
            <div className="loader-container">
              <ClipLoader color="#3f51b5" size={50} />
            </div>
          )}
          {images.length > 0 && !isLoading && page < totalPages && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
