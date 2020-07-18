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
        marginTop: isDesktopOrLaptop ? '0' : "3vh",
        marginRight: isDesktopOrLaptop ? "75px" : "0",
        marginLeft: isDesktopOrLaptop ? "80px" : "0",
      }}
    >
      {children}
    </div>
  );
};
export default CenterContainer;
