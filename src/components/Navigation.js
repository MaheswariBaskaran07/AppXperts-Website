
import React from 'react';
import logo from "../assets/images/AX-LOGO.png";
import "../App.css";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Services", link: "#" },
  { name: "Products", link: "/products" },
  { name: "Clients", link: "/clients" },
  { name: "Career", link: "#" },
  { name: "Contact Us", link: "#" },
];

const Navigation = () => {
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
   <div style={{ display: 'flex', alignItems: 'center',  }}>
<img 
  src={logo} 
  alt="AppXperts Logo" 
  style={{ 
       // increase more
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
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.link} style={{
              textDecoration: 'none',
              color: '#222',
              fontWeight: 500,
              fontSize: 16,
              padding: '6px 12px',
              borderRadius: 4,
              transition: 'background 0.2s, color 0.2s',
            }}
              onMouseOver={e => e.target.style.color = '#1a3fa6'}
              onMouseOut={e => e.target.style.color = '#222'}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="#book" style={{
        background: 'linear-gradient(180deg, #1a3fa6 60%, #2ecbfa 100%)',


        color: '#fff',
        padding: '10px 28px',
        borderRadius: 22,
        fontWeight: 600,
        fontSize: 15,
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(26,63,166,0.08)',
        transition: 'background 0.2s',
      }}>
        Book Now
      </a>
    </nav>
  );
};

export default Navigation;