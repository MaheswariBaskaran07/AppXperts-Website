import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';
import { BrowserRouter } from 'react-router-dom'; 
import React, { useEffect, useState } from 'react';
import loaderLogo from './assets/images/loader.png';


ReactGA.initialize('G-VDQXF4R29M');

function RootWithLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#fff",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <img
          src={loaderLogo}
          alt="Loading..."
          style={{
            width: 120,
            height: 120,
            animation: "spin-bounce 1.2s infinite cubic-bezier(.68,-0.55,.27,1.55)"
          }}
        />
        <style>{`
          @keyframes spin-bounce {
            0% { transform: scale(1) rotate(0deg); filter: brightness(1); }
            40% { transform: scale(1.15) rotate(10deg); filter: brightness(1.2); }
            60% { transform: scale(0.95) rotate(-10deg); filter: brightness(0.95); }
            100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
          }
        `}</style>
      </div>
    );
  }
  return (
    <React.StrictMode>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootWithLoader />);

