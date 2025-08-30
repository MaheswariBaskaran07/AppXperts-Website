import {useState} from "react";
import CRM from '../../assets/ProductDetails/CRM.png'
import BookNowPopup from "../BookNowPopup";

const ProductCRM = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
      <>
   <div style={{ marginLeft: "50px" }}>
     <button
          className="submit-button"
          style={{ marginTop: "16px" }}
          onClick={() => window.location.href = "/products"}
        >
          Go Back
        </button>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f9f9f9",
        borderRadius: "12px",
        maxWidth: "1000px",
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {/* Left Content */}
      <div style={{ flex: 1, paddingRight: "30px" }}>
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "600",
            marginBottom: "16px",
            color: "#111",
            lineHeight: "1.3",
          }}
        >
          CRM – Customer <br /> Relationship Management
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555",
            marginBottom: "10px",
          }}
        >
         Grow Customer Loyalty with Smarter CRM Solutions
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our CRM system is designed to centralize all your customer interactions and relationship management in one intelligent platform – from lead tracking and sales pipelines to customer support and engagement. With real-time insights and automation, you can improve communication, boost sales efficiency, and build stronger, long-lasting customer relationships.
        </p>
        <a
          onClick={() => setIsOpen(true)}
        className="submit-button"
        >
          Book a Demo Today →
        </a>
      </div>
 <BookNowPopup open={isOpen} setOpen={setIsOpen} />
      {/* Right Side - Two Image Placeholders */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={CRM}   // 👈 replace with your image path or imported image
          alt="CRM"
          style={{
            height: "420px",      // was 200 + 20 gap + 200 → adjust as you like
            width: "100%",
            objectFit: "cover",   // keeps aspect ratio while covering
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
    </>
  );
};

export default ProductCRM;
