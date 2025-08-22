
import React from 'react';
import Appxpertsbiglog from "../../assets/Home/Section.png";
import Badge1 from "../../assets/Home/slow_motion_video.png"

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
      width: '100%',
      fontFamily: 'Poppins'
    }}>
      {/* Left Side: Text */}
  <div style={{ flex: 1.4, zIndex: 2, paddingLeft: 64, position: 'relative', minHeight: 180, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <h1 style={{
          fontSize: 135,
          fontWeight: 600,
          color: '#bfc2c7',
          margin: '0 0 8px 0',
          top: -30,
          letterSpacing: 2,
          lineHeight: 1.1,
          whiteSpace: 'nowrap',
          position: 'relative',
          zIndex: 2,
          width: '100%'
        }}>
          YOUR IT EXPERTS
          <span style={{
            position: 'absolute',
            right: '60px',
            top: '35px',
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 0.97
          }}>
            <img src={Appxpertsbiglog} alt="AppXperts 3D Logo" style={{ width: 600, maxWidth: '100%', filter: 'drop-shadow(0 8px 32px #1a3fa622)' }} />
            {/* Badges overlay */}
            {/* <img src={Badge} alt="Badge" style={{ position: 'absolute', left: '5%', bottom: '4%', width: 80, zIndex: 2, boxShadow: '0 2px 8px #1a3fa622' }} />
            <img src={Badge1} alt="Badge1" style={{ position: 'absolute', right: '-5%', bottom: '10%', width: 80, zIndex: 2, boxShadow: '0 2px 8px #1a3fa622' }} /> */}
          </span>
        </h1>
        <p style={{
          fontSize: 32,
          fontWeight: 400,
          color: '#222',
          margin: '12px 0 12px 0',
          width: '100%',
          maxWidth: 600
        }}>
          Turning your vision into digital<br />
          reality with precision and creativity.
        </p>
        <p style={{
          fontSize: 16,
          fontWeight: 400,
          color: '#555',
          marginBottom: 20,
          maxWidth: 600,
          lineHeight: 1.7,
          width: '100%'
        }}>
          At AppXperts, we blend cutting-edge technology with innovative design to build software that powers your business growth. From custom applications to enterprise solutions, we help businesses digitally transform with confidence.
        </p>
  <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20, width: '100%' }}>
          <a href="#knowmore" style={{
            background: 'linear-gradient(180deg, #1a3fa6 60%, #2ecbfa 100%)',


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
  <div style={{ display: 'flex', alignItems: 'center', gap: 64,  width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#111' }}>95</span><span style={{ fontWeight: 700, fontSize: 32, color: '#1a3fa6' }}>%</span>
            <span style={{ color: '#888', fontWeight:400, fontFamily:'Poppins', fontSize: 16, marginLeft: 8 }}>Projects Completed</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontWeight: 700, fontSize: 32, color: '#111' }}>30</span><span style={{ fontWeight: 700, fontSize: 32, color: '#1a3fa6' }}>+</span>
            <span style={{ color: '#888', fontWeight:400, fontFamily:'Poppins', fontSize: 16, marginLeft: 8 }}>Recognized Creativity</span>
          </div>
        </div>
      </div>
  {/* Right Side: 3D Logo and Badges (now overlapped in heading) */}
    </section>
  );
};

export default Home;