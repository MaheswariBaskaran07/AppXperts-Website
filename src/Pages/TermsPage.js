import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const TermsPage = () => {
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setBadgeVisible(true), 300);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - AppXperts</title>
        <meta name="description" content="Terms and Conditions for using AppXperts services" />
      </Helmet>
      <Navigation />
      
      {/* Professional Banner */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1a3fa6 0%, #2e5fd4 50%, #4a8fff 100%)',
        minHeight: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '0px'
      }}>
        {/* Animated Background Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '-50px',
            right: '100px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px dashed rgba(255,255,255,0.2)',
            opacity: 0.3
          }}
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '80px',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            transform: 'rotate(45deg)'
          }}
        />
        
        {/* Document Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '60px',
            left: '15%',
            fontSize: '80px',
            opacity: 0.15
          }}
        >
          📄
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
                  background: 'rgba(255,255,255,0.2)',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '500',
                  marginBottom: '20px',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                Legal Documents
              </motion.span>
            )}
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              margin: '20px 0',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Terms & Conditions
            </h1>
            <p style={{
              fontSize: '18px',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>

        {/* Shield Icon */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '10%',
            fontSize: '100px',
            opacity: 0.15
          }}
        >
          🛡️
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
          <p>Welcome to our website. By accessing or using our services, you agree to the following Terms and Conditions.</p>
        </motion.div>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>1. Acceptance of Terms</h2>
        <p>By using this website, you confirm that you agree to follow and be bound by these terms. If you do not agree, please do not use our services.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>2. Services</h2>
        <p>We provide software / IT / business / ecommerce / POS / web services.</p>
        <p>We reserve the right to modify or discontinue any service at any time without notice.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>3. User Responsibilities</h2>
        <p>You agree that you will:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Provide correct information</li>
          <li>Not use the website for illegal activities</li>
          <li>Not copy or misuse our content</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>4. Payments</h2>
        <p>All payments must be made in full before service activation unless otherwise agreed.</p>
        <p>We are not responsible for payment failure due to bank / gateway issues.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>5. Intellectual Property</h2>
        <p>All content, logo, design, and software belong to our company.</p>
        <p>You cannot copy, reuse, or sell without permission.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>6. Limitation of Liability</h2>
        <p>We are not responsible for:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Data loss</li>
          <li>Service interruption</li>
          <li>Third-party issues</li>
        </ul>
        <p>Use the service at your own risk.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>7. Changes to Terms</h2>
        <p>We may update terms anytime.</p>
        <p>Updated terms will be posted on this page.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>8. Contact</h2>
        <p>For any questions, contact us at:</p>
        <p>Email: <a href="mailto:info@appxes.com" style={{ color: '#1a3fa6', textDecoration: 'none' }}>info@appxes.com</a></p>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
