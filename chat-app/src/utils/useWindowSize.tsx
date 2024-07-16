import { useState, useEffect } from "react";

type Sizes = {
  width: undefined | number;
  height: undefined | number;
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
