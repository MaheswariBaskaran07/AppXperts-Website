import React from "react";
import "../components/Career/apply.css"; // Import the CSS file

export default function BookNowPopup({ open, setOpen }) {
  if (!open) return null;

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif", // ✅ Poppins font
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    color: "#1C1C1C",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif", // ✅ Poppins font
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        fontFamily: "'Poppins', sans-serif", // ✅ Poppins applied globally
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          borderRadius: "12px",
          padding: "40px",
          background: "#FAF9F9",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          fontFamily: "'Poppins', sans-serif", // ✅ Apply here also
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "400",
            color: "#1C1C1C",
            marginBottom: "28px",
            textAlign: "left", // ✅ Heading left aligned
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Fill the following Details
        </h2>

        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* First & Last Name */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>First Name</label>
              <input type="text" placeholder="Steve" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Last Name</label>
              <input type="text" placeholder="Rogers" style={inputStyle} />
            </div>
          </div>

          {/* Email & Phone Number */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="steve@example.com"
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input type="tel" placeholder="+1 234 567" style={inputStyle} />
            </div>
          </div>
          
          <div>
            <label style={labelStyle}>Subject</label>
            <textarea
              placeholder="Enter Subject"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>
          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Enter Message"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {/* ✅ aligned to right */}
             <button type="submit" class="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
