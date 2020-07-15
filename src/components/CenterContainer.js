import React from "react";
import { useMediaQuery } from "react-responsive";
const CenterContainer = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <div
      style={{
        // backgroundColor: isDesktopOrLaptop ? "red" : "blue",
        width: "auto",
        height: "100vh",
        marginTop: "75px",
        marginRight: isDesktopOrLaptop ? "75px" : "60px",
        marginLeft: isDesktopOrLaptop ? "80px" : "65px",
      }}
    >
      {children}
    </div>
  );
};
export default CenterContainer;
