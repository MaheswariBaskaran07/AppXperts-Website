
import React from 'react';
import Appxpertsbiglog from "../../assets/Home/Section.png";
import Badge1 from "../../assets/Home/slow_motion_video.png"

const Home = () => {
  return (
    <section className="home-section" style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      minHeight: '90vh',
      padding: '48px 0 0 0',
      background: 'linear-gradient(120deg, #f8fafc 70%, #eaf6fb 100%)',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      fontFamily: "Poppins, sans-serif"
    }}>
      {/* Left Side: Text */}
      <div className="home-left" style={{ flex: 1.4, zIndex: 2, paddingLeft: 64, position: 'relative', minHeight: 180, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <h1 className="home-title" style={{
          fontSize: 135,
          fontWeight: 600,
          color: '#bfc2c7',
          margin: '0 0 8px 0',
          top: -30,
          letterSpacing: 2,
          lineHeight: 1.1,
          position: 'relative',
          zIndex: 2,
          width: '100%',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          YOUR IT EXPERTS
        </h1>
        <p className="home-subtitle" style={{
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
        <p className="home-desc" style={{
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
        <div className="home-btn-row" style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20, width: '100%' }}>
          <a href="/about" className='submit-button'>Know More</a>
          {/* <a href="#video" style={{
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
          </a> */}
        </div>
        <div className="home-stats-row" style={{ display: 'flex', alignItems: 'center', gap: 64,  width: '100%' }}>
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
      {/* Right Side: 3D Logo and Badges */}
      <div className="home-right" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative', minHeight: '68vh', paddingRight: 24 }}>
        <img src={Appxpertsbiglog} alt="AppXperts 3D Logo" className="home-main-logo" />
      </div>
      {/* Responsive Home Styles */}
      <style>{`
        .home-main-logo {
          /* Large, responsive logo (like image 2) without clipping */
          position: absolute;
          right: 0;
          top: 70%;
          transform: translateY(-50%);
          width: clamp(520px, 50vw, 980px);
          max-height: 82vh; /* keep inside viewport height */
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 32px #1a3fa622);
          border-radius: 24px;
          transition: width 0.3s ease, max-height 0.3s ease, transform 0.3s ease;
          z-index: 1;
          pointer-events: none;
        }
        .home-title {
          z-index: 2;
          position: relative;
        }
        .home-right {
          position: relative;
          min-height: clamp(520px, 72vh, 900px);
        }
        @media (max-width: 1200px) {
          .home-title {
            font-size: 80px !important;
          }
          .home-left {
            padding-left: 24px !important;
          }
          .home-main-logo {
            width: clamp(400px, 44vw, 760px) !important;
            max-height: 74vh !important;
          }
        }
        @media (max-width: 900px) {
          .home-title {
            font-size: 48px !important;
          }
          .home-subtitle {
            font-size: 22px !important;
          }
          .home-left {
            padding-left: 12px !important;
          }
          .home-section {
            padding: 24px 0 0 0 !important;
          }
          .home-stats-row {
            gap: 24px !important;
          }
          .home-main-logo {
            width: 260px !important;
            max-height: 60vh !important;
            position: static !important;
            transform: none !important;
          }
        }
        @media (max-width: 700px) {
          .home-section {
            flex-direction: column !important;
            align-items: flex-start !important;
            min-height: unset !important;
            padding: 8px 0 0 0 !important;
          }
          .home-left {
            padding-left: 0 !important;
            min-height: unset !important;
            width: 100% !important;
          }
          .home-title {
            font-size: 28px !important;
            margin-bottom: 8px !important;
            text-align: center !important;
            white-space: normal !important;
            word-break: break-word !important;
            overflow-wrap: break-word !important;
            line-height: 1.2 !important;
            z-index: 2 !important;
            position: relative !important;
            padding-top: 32px !important;
          }
          .home-subtitle {
            font-size: 14px !important;
            margin-bottom: 8px !important;
            text-align: center !important;
          }
          .home-desc {
            font-size: 13px !important;
            margin-bottom: 10px !important;
            text-align: center !important;
          }
          .home-btn-row {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: center !important;
            width: 100% !important;
          }
          .home-stats-row {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: center !important;
            width: 100% !important;
          }
          .home-stats-row > div {
            justify-content: center !important;
          }
          .home-right {
            width: 100% !important;
            margin-top: 12px !important;
            display: flex !important;
            justify-content: center !important;
            position: static !important;
          }
          .home-main-logo {
            width: 100px !important;
            margin: 0 auto !important;
            display: block !important;
            position: static !important;
            right: unset !important;
            top: unset !important;
            z-index: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;