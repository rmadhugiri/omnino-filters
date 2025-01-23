import React from "react";
import { User } from "@geist-ui/icons";


const Header = () => {
  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="header-logo">
        <img
          src="/images/OmninoBeta Logo.png"
          alt="Omnino Logo"
        />
      </div>

      {/* Centered text */}
      <div className="header-center-text">
        Backend Developer skilled in Python and AWS to optimize a cloud...
      </div>

      {/* User icon on the right */}
      <div className="header-user-icon">
        <User size={22} color="#333" />
      </div>
    </header>
  );
};

export default Header;
