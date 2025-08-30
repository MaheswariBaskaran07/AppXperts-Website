import React , { useState } from "react";
import "./Booking.css"; // Import the CSS file
import BookNowPopup from "../BookNowPopup";

const Booking = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="booking-section">
      <div className="booking-content">
        <h2>Let’s build something great.</h2>
        <p>Your idea, our craft.</p>
        <button onClick={() => setIsOpen(true)} className="submit-button">
          Book a meeting →
        </button>
      </div>
      <BookNowPopup open={isOpen} setOpen={setIsOpen} />
    </section>
  );
};

export default Booking;
