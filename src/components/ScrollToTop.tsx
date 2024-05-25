// src/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface IProps {
  children: React.ReactNode;
}

const ScrollToTop: React.FC<IProps> = (props) => {
  const location = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window?.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
