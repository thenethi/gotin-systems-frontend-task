import { useState } from "react";
import "./index.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header-container">
      <div>
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728899201/SellCRE_lOGO_f4yjcm.png"
          alt="header-logo"
          className="header-logo"
        />
      </div>
      <div className={`nav-items-container ${isMobileMenuOpen ? "open" : ""}`}>
        <p className="nav-links">Features</p>
        <p className="nav-links">Pricing</p>
        <p className="nav-links">
          <img
            src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728899517/Icon_hza38t.png"
            alt="lock-icon"
          />{" "}
          Login
        </p>
        <button type="button" className="try-for-free-btn">
          Try For Free
        </button>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <img
          src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728900302/Icon_1_onl74i.png"
          alt="hamburger-menu-icon"
          className="hamburger-icon"
        />
      </div>
    </div>
  );
};

export default Header;
