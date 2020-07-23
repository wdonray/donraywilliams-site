import React from "react";
import { useMediaQuery } from "react-responsive";

const CenterContainer = ({ children, minHeight }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const [showMessage, setShowMessage] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShowMessage(true), 100);
  }, []);

  return (
    <div
      style={{
        width: "auto",
        minHeight: minHeight ? minHeight : "100vh",
        marginTop: "10vh",
        marginRight: isDesktopOrLaptop ? "75px" : "0",
        marginLeft: isDesktopOrLaptop ? "80px" : "0",
        opacity: showMessage ? 1 : 0,
        transition: 'all 300ms ease-in'
      }}
    >
      {children}
    </div>
  );
};
export default CenterContainer;
