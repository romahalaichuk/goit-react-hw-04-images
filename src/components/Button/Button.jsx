import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, images }) => {
  const handleKeyPress = useCallback(
    event => {
      if (event.code === 'Enter') {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div>
      {images.length > 0 && (
        <button className="button-load-more " type="button" onClick={onClick}>
          Click me
        </button>
      )}
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default Button;
