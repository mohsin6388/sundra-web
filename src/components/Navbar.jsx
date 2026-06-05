import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import "./Navbar.css";

const COMPANY = {
  phones: ["+91 9876543210"],
};

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/benefits", label: "Why Barsana" },
  { to: "/dealers", label: "Dealers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <nav className="desktop-menu">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="desktop-actions">
          <a href={`tel:${COMPANY.phones[0]}`} className="phone-link">
            <Phone size={16} />
            {COMPANY.phones[0]}
          </a>

          {/* <Link to="/dealers" className="dealer-btn">
            Become a Dealer
          </Link> */}
        </div>

        <button className="mobile-toggle" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a href={`tel:${COMPANY.phones[0]}`} className="mobile-phone">
            <Phone size={16} />
            {COMPANY.phones[0]}
          </a>

          <Link to="/dealers" className="dealer-btn">
            Become a Dealer
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
