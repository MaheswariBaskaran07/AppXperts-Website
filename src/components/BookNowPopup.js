import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/Career/apply.css";
import logo from "../assets/Booknow demo.png";


export default function BookNowPopup({ open, setOpen }) {
  // ✅ Form state
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    EmailId: "",
    MobileNo: "",
    Subject: "",
    Message: "",
    Type: "Demo", // You can default it to "Demo" or leave empty
  });

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

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3015/api/booking/AddBooking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.Status === true) {
        toast.success("Booking submitted successfully ✅");
        setTimeout(() => {
          setOpen(false); // Close popup
          setFormData({
            FirstName: "",
            LastName: "",
            EmailId: "",
            MobileNo: "",
            Subject: "",
            Message: "",
            Type: "Demo",
          }); // Reset form
        }, 1500);
      } else {
        toast.error("Failed to submit booking ❌");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
  toast.error("Server error ❌");
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
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
          background: "linear-gradient(to right, #e2eafcff, #ffffff)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT SIDE */}
        <div style={{ padding: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "400", marginBottom: "20px", textAlign: "left" }}>
            Book Your Demo <br /> Now
          </h2>
          <p style={{ fontSize: "14px", color: "#000000A1", lineHeight: "1.6", marginBottom: "30px" }}>
            See our solutions in action and discover how AppXperts can simplify,
            scale, and supercharge your business.
          </p>
          <img src={logo} alt="Demo" style={{ width: "100%", borderRadius: "10px" }} />
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          style={{
            padding: "40px",
            background: "#eeebebff",
            borderRadius: "12px",
            margin: "20px",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 style={{ fontSize: "20px", fontWeight: "500", marginBottom: "10px" }}>
            Fill the following details
          </h3>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* First & Last Name */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="Steve"
                  style={inputStyle}
                  value={formData.FirstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="Rogers"
                  style={inputStyle}
                  value={formData.LastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  name="EmailId"
                  placeholder="steve@example.com"
                  style={inputStyle}
                  value={formData.EmailId}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  type="tel"
                  name="MobileNo"
                  placeholder="+1 234 567"
                  style={inputStyle}
                  value={formData.MobileNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label style={labelStyle}>Subject</label>
              <textarea
                name="Subject"
                placeholder="Enter Subject"
                style={{ ...inputStyle, resize: "vertical" }}
                value={formData.Subject}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="Message"
                placeholder="Enter Message"
                style={{ ...inputStyle, resize: "vertical" }}
                value={formData.Message}
                onChange={handleChange}
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
    </>
  );
}
