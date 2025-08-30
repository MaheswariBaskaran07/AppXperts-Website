import React from "react";
import School from '../../assets/ProductDetails/School.png'

const ProductSchool = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#f9f9f9",
        borderRadius: "12px",
        padding: "40px",
        maxWidth: "1000px",
        margin: "40px auto",
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
          School Management <br /> Made Smarter
        </h2>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            color: "#555",
            marginBottom: "10px",
          }}
        >
          Simplify Education with Intelligent School ERP
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
            marginBottom: "20px",
          }}
        >
          Our School Management System is designed to bring all academic and 
          administrative operations into one platform – from student admissions, 
          attendance, timetable, and examinations to staff management and parent 
          communication. With real-time data, online fee collection, and reporting, 
          schools can reduce manual tasks, improve efficiency, and focus more on 
          quality education.  
        </p>
        <a
          href="#"
          className="submit-button"
        >
          Book a Demo Today →
        </a>
      </div>

      {/* Right Side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={School}   // 👈 School Management image
          alt="School Management"
          style={{
            height: "420px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductSchool;
