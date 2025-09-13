import { useState } from "react";
import ERP from "../../assets/ProductDetails/ERP.png";
import BookNowPopup from "../BookNowPopup";
import "./ProductDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={{ marginLeft: "50px" }}>
      <motion.button
        className="submit-button"
        initial={{ y: 40, opacity: 0 }}   // Start below & invisible
        animate={{ y: 0, opacity: 1 }}   // Animate up & fade in
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 18px",
          fontSize: "16px",
          fontWeight: 500,
          background: "#1a8fff",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/products")}
      >
        <FaArrowLeft size={16} />
        
      </motion.button>
    </div>

      <div className="product-details-container">
        {/* Left Content */}
        <div className="product-text">
          <h2>
            ERP – Enterprise <br /> Resource Planning
          </h2>
          <p className="tagline">
            Streamline Your Business with Smart Celeste Birch
          </p>
          <p className="description">
            Our ERP system is designed to bring all your core business operations
            under one intelligent platform – from inventory and finance to
            operations and reporting. With real-time data insights and
            customization, you can cut down manual work, reduce errors, and make
            faster, more informed decisions.
          </p>
          <a onClick={() => setIsOpen(true)} className="submit-button">
            Book a Demo Today →
          </a>
        </div>

        <BookNowPopup open={isOpen} setOpen={setIsOpen} />

        {/* Right Side */}
        <div className="product-image">
          <img src={ERP} alt="ERP" />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
