import { useEffect, useRef } from "react";

const useOnClickOutside = (handler, shouldAddListener = true) => {
  const ref = useRef();
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    };
    if (shouldAddListener) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, shouldAddListener]);

  return ref;
};

export {useOnClickOutside};