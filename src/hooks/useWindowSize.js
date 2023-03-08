import React from "react";

/* USAGE:
  const [win] = useWindowSize();
*/

export default function useWindowSize() {
  // Define size object state //
  const [size, setSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  // Handle Event Listener //
  React.useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Console log for science //
  React.useEffect(() => {
    if (!(size.width === undefined || size.height === undefined)) {
      console.log(`%c[Window Size]`, "color: violet;", size.width, size.height);
      if (size.width === 767) {
        console.log(
          `%c[Window Size] Going to small screen mode...`,
          "color: pink;"
        );
      } else if (size.width === 768) {
        console.log(
          `%c[Window Size] Going to big screen mode...`,
          "color: pink;"
        );
      }
    }
  }, [size]);

  // Return the size object state //
  return [size];
}
