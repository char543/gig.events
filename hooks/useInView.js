import { useRef, useEffect, useState } from "react";

const useInView = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(containerRef.current);
    }, options);
    if (containerRef.current && !isVisible)
      observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};
export default useInView;
