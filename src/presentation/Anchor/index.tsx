import React, { useState, useEffect } from 'react';
import { IoCaretUpOutline } from "react-icons/io5";
import styles from './Anchor.module.scss'

const ScrollToTop = ({ showBelow } : { showBelow: number }) => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  if (!showBelow || !show) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className={styles.button}
    >
      <IoCaretUpOutline />
    </button>
  );
};

export default ScrollToTop;