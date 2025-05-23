export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  user: {
    name: string;
    username: string;
    profile_image?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  description: string | null;
}

export interface ImageResponse {
  results: Image[];
  total_pages: number;
}

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export interface LoadMoreBtnProps {
  onClick: () => void;
}

export interface ErrorMessageProps {
  message: string;
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image;
}