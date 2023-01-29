import React from "react";

const Header = () => {
  return (
    // Playing with JSX in the header to change my last name to a different color from the header class.
    <div>
      <h1 className="header">
        Justin <span style={{ color: "white" }}>Ellis</span>
      </h1>
    </div>
  );
};

export default Header;
