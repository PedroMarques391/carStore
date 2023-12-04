import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ isOpen, handleToggle }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) {
      handleToggle();
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;
