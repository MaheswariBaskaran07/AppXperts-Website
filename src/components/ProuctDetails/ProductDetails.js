import { useState } from "react";
import ERP from "../../assets/ProductDetails/ERP.png";
import BookNowPopup from "../BookNowPopup";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="back-btn-wrapper">
        <button
          className="submit-button"
          onClick={() => (window.location.href = "/products")}
        >
          Go Back
        </button>
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
