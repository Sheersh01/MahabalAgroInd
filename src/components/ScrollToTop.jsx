import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the Lenis instance from window (since it's created in App.js)
    const lenis = window.lenis;
    
    if (lenis) {
      // Use Lenis scrollTo method for smooth scrolling to top
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback to native scroll if Lenis is not available
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;