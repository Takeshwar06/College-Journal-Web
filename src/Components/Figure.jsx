import { useEffect, useState } from "react";


const Figure = () => {
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // function set current innerWidth
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    // Attach event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      <div id="main_image_container">
        <img
          id="main_image"
          src={`${
            windowWidth > 800
              ? "./Images/college-1.jpg"
              : "./Images/college-2.png"
          } `}
          alt="main"
        />
      </div>
    </>
  );
};

export default Figure;
