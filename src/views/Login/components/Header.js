import React from "react";

const Header = () => {
  return (
    <div className="text-light hero p-5 d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-start justify-content-start">
        <h1 className="translate-left">Bootstrap</h1>
        <h1 className="text-warning">React</h1>
        <h1 className="translate-right">Media</h1>
      </div>
    </div>
  );
};

export default Header;
