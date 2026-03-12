import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const RefundPage = () => {
  const [badgeVisible, setBadgeVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setBadgeVisible(true), 300);
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund & Cancellation Policy - AppXperts</title>
        <meta name="description" content="Refund and Cancellation Policy for AppXperts services" />
      </Helmet>
      <Navigation />
      
      {/* Professional Banner */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #818cf8 100%)',
        minHeight: '320px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '0px'
      }}>
        {/* Animated Wave Pattern */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '-80px',
            right: '120px',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            border: '3px dashed rgba(255,255,255,0.2)'
          }}
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '90px',
            width: '140px',
            height: '140px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '25px',
            transform: 'rotate(25deg)'
          }}
        />
        
        {/* Money Icon */}
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '55px',
            left: '10%',
            fontSize: '85px',
            opacity: 0.15
          }}
        >
          💰
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
                Payment Terms
              </motion.span>
            )}
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              margin: '20px 0',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Refund & Cancellation
            </h1>
            <p style={{
              fontSize: '18px',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Clear and transparent refund and cancellation guidelines
            </p>
          </motion.div>
        </div>

        {/* Return Icon */}
        <motion.div
          initial={{ scale: 0, x: 100 }}
          animate={{ scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '8%',
            fontSize: '95px',
            opacity: 0.15
          }}
        >
          ↩️
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
          <p>We want our customers to be satisfied with our services.</p>
        </motion.div>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>1. Cancellation</h2>
        <p>You can cancel service before activation.</p>
        <p>After service started, cancellation may not be possible.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>2. Refund Policy</h2>
        <p>Refund will be given only if:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Service not delivered</li>
          <li>Payment error</li>
          <li>Duplicate payment</li>
        </ul>
        <p style={{ marginTop: '15px' }}>Refund will NOT be given for:</p>
        <ul style={{ marginLeft: '30px', marginTop: '10px' }}>
          <li>Change of mind</li>
          <li>Partial usage</li>
          <li>Custom software work completed</li>
          <li>Delay caused by client</li>
        </ul>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>3. Refund Time</h2>
        <p>Refund will be processed within 5-10 working days.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>4. Payment Gateway Charges</h2>
        <p>Gateway / bank charges may be deducted.</p>

        <h2 style={{ fontSize: '24px', marginTop: '30px', marginBottom: '15px', color: '#1a3fa6' }}>5. Contact for Refund</h2>
        <p>Email: <a href="mailto:info@appxes.com" style={{ color: '#1a3fa6', textDecoration: 'none' }}>info@appxes.com</a></p>
        <p>Phone: +91 88255 28905</p>
      </div>
      <Footer />
    </>
  );
};

export default RefundPage;
