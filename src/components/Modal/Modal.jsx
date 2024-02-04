import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ onClose, children }) => {
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const handleKeyPress = event => {
      handleKeyDown(event);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyDown, onClose]);

  return (
    <div
      className="overlay"
      onClick={e => e.target.classList.contains('overlay') && onClose()}
    >
      <div className="modal">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
