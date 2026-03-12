import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const PrivacyPage = () => {
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setBadgeVisible(true), 300);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy - AppXperts</title>
        <meta name="description" content="Privacy Policy for AppXperts services" />
      </Helmet>
      <Navigation />
      
      {/* Professional Banner */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #22d3ee 100%)',
        minHeight: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '0px'
      }}>
        {/* Animated Circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '40px',
            right: '150px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            opacity: 0.3
          }}
        />
        <motion.div
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '100px',
            width: '120px',
            height: '120px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '30px'
          }}
        />
        
        {/* Lock Icon */}
        <motion.div
          initial={{ scale: 0, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '50px',
            left: '12%',
            fontSize: '90px',
            opacity: 0.15
          }}
        >
          🔒
        </motion.div>

        {/* Main Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          padding: '0 20px'
        }}>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {badgeVisible && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.25)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '20px',
                  border: '1px solid rgba(255,255,255,0.4)'
                }}
              >
                Your Data Protection
              </motion.span>
            )}
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              margin: '20px 0',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Privacy Policy
            </h1>
            <p style={{
              fontSize: '18px',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We value your privacy and protect your personal information
            </p>
          </motion.div>
        </div>

        {/* Security Badge Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '8%',
            fontSize: '110px',
            opacity: 0.12
          }}
        >
          ✓
        </motion.div>
      </div>

      {/* Content Section */}
      <div style={{
        maxWidth: '900px',
        margin: '60px auto 40px',
        padding: '0 20px',
        fontFamily: 'Poppins, sans-serif',
        lineHeight: '1.8',
        color: '#333'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Your privacy is important to us. This policy explains how we collect and use your data.</p>
        </motion.div>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>1. Information We Collect</h2>
        <p>We may collect:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Name</li>
          <li>Email</li>
          <li>Phone number</li>
          <li>Address</li>
          <li>Payment details</li>
          <li>Usage data</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>2. How We Use Information</h2>
        <p>We use your data to:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Provide services</li>
          <li>Improve website</li>
          <li>Contact you</li>
          <li>Process payments</li>
          <li>Customer support</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>3. Data Protection</h2>
        <p>We use secure servers and encryption to protect your data.</p>
        <p>We do not sell your personal information.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>4. Cookies</h2>
        <p>Our website may use cookies to improve user experience.</p>
        <p>You can disable cookies in browser settings.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>5. Third-Party Services</h2>
        <p>We may use third-party services like:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Payment gateway</li>
          <li>Hosting</li>
          <li>Analytics</li>
        </ul>
        <p>They have their own privacy policy.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>6. Your Rights</h2>
        <p>You can request:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Delete your data</li>
          <li>Update your data</li>
          <li>Stop communication</li>
        </ul>
        <p>Contact: <a href="mailto:info@appxes.com" style={{ color: '#1a3fa6', textDecoration: 'none' }}>info@appxes.com</a></p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>7. Changes to Policy</h2>
        <p>We may update this policy anytime.</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPage;
