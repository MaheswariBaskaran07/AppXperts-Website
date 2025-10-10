import React from 'react';

const FloatingWhatsApp = ({ phone = '+918825528905', message = 'Hi, I would like to know more about your services.' }) => {
  const href = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="floating-whatsapp"
    >
      <i className="bi bi-whatsapp" aria-hidden="true" style={{ fontSize: 30, lineHeight: 1, color: '#fff' }} />
      <style>{`
        .floating-whatsapp {
          position: fixed;
          right: 16px;
          bottom: 16px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
          z-index: 1000;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .floating-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(37, 211, 102, 0.5); }
        .floating-whatsapp:active { transform: translateY(0); }
        @media (max-width: 700px) {
          .floating-whatsapp { right: 12px; bottom: 12px; width: 52px; height: 52px; }
          .floating-whatsapp .bi-whatsapp { font-size: 28px; }
        }
      `}</style>
    </a>
  );
};

export default FloatingWhatsApp;
