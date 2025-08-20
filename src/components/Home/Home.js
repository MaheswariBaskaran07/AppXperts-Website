
import React from 'react';
import Appxpertsbiglog from "../../assets/Home/ChatGPT Image Jul 31, 2025, 05_39_51 PM 1.png";
import Badge from "../../assets/Home/Badge.png";
import Badge1 from "../../assets/Home/Badge (1).png";

const Home = () => {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      minHeight: '80vh',
      padding: '48px 0 0 0',
      background: 'linear-gradient(120deg, #f8fafc 70%, #eaf6fb 100%)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%'
    }}>
      {/* Left Side: Text */}
      <div style={{ flex: 1, maxWidth: 540, zIndex: 2, paddingLeft: 48, position: 'relative', minHeight: 160 }}>
        <h1 style={{
          fontSize: 72,
          fontWeight: 800,
          color: '#bfc2c7',
          margin: 0,
          letterSpacing: 2,
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          position: 'relative',
          zIndex: 2
        }}>
          YOUR IT EXPERTS
          <span style={{
            position: 'absolute',
            right: '-340px',
            top: '-60px',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.95
          }}>
            <img src={Appxpertsbiglog} alt="AppXperts 3D Logo" style={{ width: 410, maxWidth: '100%', filter: 'drop-shadow(0 8px 32px #1a3fa622)' }} />
            {/* Badges overlay */}
            <img src={Badge} alt="Badge" style={{ position: 'absolute', left: '18%', bottom: '10%', width: 54, zIndex: 2, boxShadow: '0 2px 8px #1a3fa622' }} />
            <img src={Badge1} alt="Badge1" style={{ position: 'absolute', right: '18%', bottom: '10%', width: 54, zIndex: 2, boxShadow: '0 2px 8px #1a3fa622' }} />
          </span>
        </h1>
        <p style={{
          fontSize: 24,
          fontWeight: 600,
          color: '#222',
          margin: '36px 0 18px 0',
        }}>
          Turning your vision into digital<br />
          reality with precision and creativity.
        </p>
        <p style={{
          fontSize: 15,
          color: '#555',
          marginBottom: 32,
          maxWidth: 420,
          lineHeight: 1.7
        }}>
          At AppXperts, we blend cutting-edge technology with innovative design to build software that powers your business growth. From custom applications to enterprise solutions, we help businesses digitally transform with confidence.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 36 }}>
          <a href="#knowmore" style={{
            background: 'linear-gradient(90deg, #1a3fa6 60%, #2ecbfa 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 22,
            fontWeight: 600,
            fontSize: 16,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(26,63,166,0.08)',
            transition: 'background 0.2s',
          }}>Know More</a>
          <a href="#video" style={{
            display: 'flex',
            alignItems: 'center',
            color: '#1a3fa6',
            fontWeight: 500,
            fontSize: 16,
            textDecoration: 'none',
            gap: 8
          }}>
            <img src={Badge1} alt="Play" style={{ width: 32, height: 32, borderRadius: '50%', boxShadow: '0 2px 8px #1a3fa622' }} />
            Watch a Video
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 64, marginTop: 18 }}>
          <div>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#1a3fa6' }}>95%</span><br />
            <span style={{ color: '#888', fontSize: 15 }}>Projects<br />Completed</span>
          </div>
          <div>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#1a3fa6' }}>30+</span><br />
            <span style={{ color: '#888', fontSize: 15 }}>Recognized<br />Creativity</span>
          </div>
        </div>
      </div>
  {/* Right Side: 3D Logo and Badges (now overlapped in heading) */}
    </section>
  );
};

export default Home;