import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleClickPrevious = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="slider">
      <div className="imageContainer">
        <img src={images[currentImageIndex]} alt="Product" />
      </div>
      <div className="controls">
        <button
          onClick={handleClickPrevious}
          disabled={currentImageIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleClickNext}
          disabled={currentImageIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
