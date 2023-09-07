import React from 'react'

import classes from './PopupMessage.module.css';

const PopupMessage = ({ onClose, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - e.currentTarget.getBoundingClientRect().left,
      y: e.clientY - e.currentTarget.getBoundingClientRect().top,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - offset.x;
      const newY = e.clientY - offset.y;
      e.currentTarget.style.left = newX + 'px';
      e.currentTarget.style.top = newY + 'px';
    }
  };

  return (
    <div
      className={classes['movable-popup']}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <button className={classes['close-button']} onClick={onClose}>
        X
      </button>
      {children}
    </div>
  );
};

export default PopupMessage