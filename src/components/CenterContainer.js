import React from "react";
import { useMediaQuery } from "react-responsive";
import "../style/CenterContainerStyle.css";
import { CSSTransition } from "react-transition-group";

const CenterContainer = ({ children, minHeight }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const [showMessage, setShowMessage] = React.useState(false);
  
  React.useEffect(() => {
    setShowMessage(true);
  }, []);

  return (
    <div
      style={{
        width: "auto",
        minHeight: minHeight ? minHeight : "100vh",
        marginTop: '10vh',
        marginRight: isDesktopOrLaptop ? "75px" : "0",
        marginLeft: isDesktopOrLaptop ? "80px" : "0",
      }}
    >
      <CSSTransition
        in={showMessage}
        timeout={300}
        unmountOnExit
        classNames="fade"
      >
        {children}
      </CSSTransition>
    </div>
  );
};
export default CenterContainer;
