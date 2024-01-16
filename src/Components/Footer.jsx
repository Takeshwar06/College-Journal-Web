import { useEffect, useState } from "react";
import "../CSS/Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    position: "fixed",
    bottom: "0",
  };

  const defaultStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "overpass",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    minHeight: "50px",
    padding: "10px",
    width: "100%",
  };

  const location = useLocation();
  const [route, setRoute] = useState("/");
  useEffect(() => {
    // This code will run when the component is first mounted
    const currentRoute = location.pathname;
    console.log("Current Route:", currentRoute);
    setRoute(currentRoute);

    // If you want to perform some cleanup when the component is unmounted, return a function from useEffect
    return () => {
      // Cleanup code goes here (optional)
    };
  }, [location]); // Include location in the dependency array to ensure it's updated when the route changes

  return route === "/login" || route === "/signup" ? (
    ""
  ) : (
    <footer
      style={route === "/contact-us" ? footerStyle : defaultStyle}
      className="footer"
    >
      <p>
        © Copyright <b>IJSRGI.</b> All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
