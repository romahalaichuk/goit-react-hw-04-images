import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <li
      className="gallery-item"
      onClick={() => onImageClick(image.largeImageURL)}
    >
      <img src={image.webformatURL} alt="" />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <img src={image.largeImageURL} alt="" />
        </Modal>
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
