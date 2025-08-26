
import React , { useState } from 'react';
import logo from "../assets/images/AX-LOGO.png";
import "../App.css";
import BookNowPopup from './BookNowPopup';

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Products", link: "/products" },
  { name: "Clients", link: "/clients" },
  { name: "Career", link: "/career" },
  { name: "Contact Us", link: "/contact" },
];

const Navigation = () => {
  // Get current path for highlighting
  const currentPath = window.location.pathname;
   const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 40px',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo} 
          alt="AppXperts Logo" 
          style={{ 
            width: 'auto',
            objectFit: 'contain',
            display: 'block'
          }} 
        />
      </div>
      <ul style={{
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: 28
      }}>
        {navItems.map((item) => {
          const isActive = item.link !== '#' && (item.link === '/' ? currentPath === '/' : currentPath.startsWith(item.link));
          return (
            <li key={item.name}>
              <a
                href={item.link}
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#1a3fa6' : '#222',
                  fontWeight: 500,
                  fontSize: 16,
                  padding: '6px 12px',
                  borderRadius: 4,
                  background: isActive ? 'rgba(26,63,166,0.08)' : 'none',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseOver={e => e.target.style.color = '#1a3fa6'}
                onMouseOut={e => e.target.style.color = isActive ? '#1a3fa6' : '#222'}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <button 
       style={{
        background: 'linear-gradient(180deg, #1a3fa6 60%, #2ecbfa 100%)',
        color: '#fff',
        padding: '10px 28px',
        borderRadius: 22,
        fontWeight: 600,
        fontSize: 15,
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(26,63,166,0.08)',
        transition: 'background 0.2s',
        border: "none",
      }}
      onClick={() => setIsOpen(true)}
      >
        Book Now
      </button>
          
      <BookNowPopup open={isOpen} setOpen={setIsOpen} />
    </nav>
  );
};

export default Navigation;