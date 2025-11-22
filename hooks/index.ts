import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: () => void) {
  //Create a ref that will be attached to the element to watch.
  //Initially null, later React will set ref.current to the DOM node.
  const ref = useRef<T>(null);

  //Effect sets up the click handler on the document.

  useEffect(() => {
    //check if click target is outside the element referenced by `ref`.
    const handleClickedOutside = (e: MouseEvent) => {
      // ref.current may be null until the element is mounted
      if (ref.current && !ref.current.contains(e.target as Node)) {
        // If the click happened outside the element, call the provided callback.
        callback();
      }
    };

    // Register the handler on the document to capture clicks anywhere.
    document.addEventListener("mousedown", handleClickedOutside);

    //Return the ref so callers can attach it to an element.
  }, [callback]);

  return ref;
}

//ref.current ----> the box
// e.target -----> the thing you clicked
// contains() ----> check if click is inside the box
// !contains() ----> outside the box
