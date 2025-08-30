import React from "react";
import "../components/Career/apply.css";
import logo from "../assets/Booknow demo.png";

export default function BookNowPopup({ open, setOpen }) {
  if (!open) return null;

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "6px",
    color: "#1C1C1C",
    fontSize: "14px",
    fontWeight: 400,
    textAlign: "left",
    fontFamily: "'Poppins', sans-serif",
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
        fontFamily: "'Poppins', sans-serif",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          maxWidth: "1000px",
          width: "90%",
          maxHeight: "105vh",
          overflowY: "auto",
          borderRadius: "12px",
          background: "linear-gradient(to right, #e2eafcff, #ffffff)", // ✅ gradient popup
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr", // Left & Right
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT SIDE CONTENT */}
        <div
          style={{
            padding: "40px",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "400",
              marginBottom: "20px",
              color: "#000000",
              textAlign: 'left',
            }}
          >
            Book Your Demo <br/> Now
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#000000A1",
              lineHeight: "1.6",
              marginBottom: "30px",
              fontWeight: 400,
            }}
          >
            See our solutions in action and discover how AppXperts can simplify,
            scale, and supercharge your business. In this personalized session,
            our experts will walk you through the features that matter most to
            you — and answer all your questions in real time.
          </p>
          <img
            src={logo}
            alt="Demo"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          style={{
            padding: "40px",
            background: "#eeebebff",
            borderRadius: "12px",
            margin: "20px",
            flex: 1, // ✅ take remaining space in grid column
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "500",
              color: "#1C1C1C",
              marginBottom: "10px",
              marginTop: "5px",
              textAlign: "left",
            }}
          >
            Fill the following details
          </h3>

          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              flex: 1, // ✅ form stretches inside container
              marginTop: "15px",
            }}
          >
            {/* First & Last Name */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
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

            {/* Email & Phone */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
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

            {/* Subject */}
            <div>
              <label style={labelStyle}>Subject</label>
              <textarea
                placeholder="Enter Subject"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Enter Message"
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
