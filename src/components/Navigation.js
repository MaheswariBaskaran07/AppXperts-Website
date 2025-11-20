import React, { useState } from "react";
import logo from "../assets/images/Side icon.png";
import "../App.css";
import BookNowPopup from "./BookNowPopup";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Products", link: "/products" },
  {name:" Portfolio", link:"/portfolio"},
  { name: "Clients", link: "/clients" },
  { name: "Career", link: "/career" },
  { name: "Contact Us", link: "/contact" },
];

const Navigation = () => {
  // Get current path for highlighting
  const currentPath = window.location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  // Responsive menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-responsive">
      <div className="nav-logo">
        <img src={logo} alt="AppXperts Logo" />
      </div>
      <div className="nav-menu-center">
        <ul className={`nav-list${menuOpen ? " nav-list-open" : ""}`}>
          {navItems.map((item) => {
            const isActive =
              item.link !== "#" &&
              (item.link === "/"
                ? currentPath === "/"
                : currentPath.startsWith(item.link));
            return (
              <li key={item.name}>
                <a href={item.link} className={isActive ? "nav-active" : ""}>
                  {item.name}
                </a>
              </li>
            );
          })}
          <li>
            <button
              className="submit-button nav-book-btn"
              onClick={() => setIsOpen(true)}
            >
              Book Now
            </button>
          </li>
        </ul>
      </div>
      {/* Hamburger for mobile - right aligned */}
      <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span style={{ fontSize: 28, lineHeight: 1 }}>&#9776;</span>
      </button>
      <BookNowPopup open={isOpen} setOpen={setIsOpen} />
      {/* Responsive CSS */}
      <style>{`
        .nav-responsive {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 40px;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          position: relative;
          z-index: 10;
        }
        .nav-logo img {
          width: 200px;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .nav-menu-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        @media (max-width: 900px) {
          .nav-responsive {
            padding: 14px 18px;
          }
          .nav-logo img {
            width: 150px;
          }
          .nav-list {
            gap: 18px;
          }
        }
        .nav-list {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 28px;
        }
        .nav-list li {
          margin: 0;
        }
        .nav-list a {
          text-decoration: none;
          color: #222;
          font-weight: 500;
          font-size: 16px;
          padding: 6px 12px;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
        }
        .nav-list a.nav-active {
          color: #1a3fa6;
          background: rgba(26,63,166,0.08);
        }
        .nav-list a:hover {
          color: #1a3fa6;
        }
        .nav-book-btn {
          margin-left: 12px;
        }
@media (max-width: 700px) {
  .nav-hamburger {
    display: block;
    position: absolute;
    right: 18px;
    top: 18px;
    margin-left: 0;
  }
  .nav-menu-center {
    flex: unset;
    width: 100%;
    display: block;
  }
  .nav-list {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    padding: 18px 0 8px 0;
    display: none;
  }
  .nav-list.nav-list-open {
    display: flex;
  }
  .nav-list li {
    width: 100%;
    margin: 0;
  }
  .nav-list a, .nav-book-btn {
    width: 100%;
    text-align: left;
    padding: 8px 16px;   /* reduced height (was 14px 24px) */
    font-size: 18px;
    border-radius: 0;
  }
  /* active link style */
  .nav-list a.nav-active {
    color: #1a3fa6;
    background: rgba(26,63,166,0.08);
    border-left: 4px solid #1a3fa6;
    padding: 8px 16px;   /* ensure same slim padding */
  }
  .nav-list a:hover {
    background: rgba(26,63,166,0.05);
    border-left: 4px solid #1a3fa6;
    color: #1a3fa6;
    padding: 8px 16px;   /* keep slim */
  }
  .nav-book-btn {
    margin-left: 0;
    margin-top: 8px;
  }
}


      `}</style>
    </nav>
  );
};

export default Navigation;
