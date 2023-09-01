import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * create a hooks handle progress router
 */
const useProgressRouter = () => {
  const [progress, setLoadingProgress] = useState(0);
  const location = useLocation();
  // Handle show loading when route change in react-router-dom
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    }, 200);
    const timeout = setTimeout(() => {
      setLoadingProgress(0);
    }, 200);
    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [location]);
  return progress;
};

export default useProgressRouter;
