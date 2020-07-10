import React from "react";
const CenterContainer = ({ children }) => {
  return (
    <div
      style={{
        // backgroundColor: "blue",
        width: "auto",
        height: "100vh",
        margin: "75px",
      }}
    >
      {children}
    </div>
  );
};
export default CenterContainer;
