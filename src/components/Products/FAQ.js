import React, { useState } from "react";
import "./FAQ.css";
import icon from "../../assets/Product/Icon Wrapper.png"
import cal from "../../assets/Product/Icon Wrapper (1).png"
import sub from "../../assets/Product/Button.png"
import plus from "../../assets/Product/Button (1).png"

const faqs = [
  {
    question: "Can I customize the ERP system to fit my business workflow?",
    answer:
      "Yes, our ERP is fully customizable to adapt to your industry-specific needs and processes.",
  },
  {
    question: "Is your CRM suitable for small businesses?",
    answer:
      "Yes, our CRM is designed to support small, medium, and large businesses with scalable features.",
  },
  {
    question: "Do you offer onboarding and training for HRMS users?",
    answer:
      "Absolutely! We provide onboarding sessions, training, and continuous support for HRMS users.",
  },
  {
    question: "What payment gateways are supported in your E-commerce solution?",
    answer:
      "We support multiple gateways including Stripe, PayPal, Razorpay, and more.",
  },
  {
    question: "Can hospitals use the software for appointment and billing?",
    answer:
      "Yes, our software includes modules for hospital appointment scheduling and billing management.",
  },
  {
    question: "Does your school management software support online classes?",
    answer:
      "Yes, our school management system integrates with popular online class platforms for virtual learning.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 2-column grid, 3 cards per column, left: heading+desc, right: grid
  const leftColFaqs = faqs.slice(0, 3);
  const rightColFaqs = faqs.slice(3, 6);

  return (
    <section className="faq-section" style={{ fontFamily: 'Poppins' }}>
      <div className="faq-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', paddingRight: 32 }}>
        <h2 style={{ fontSize: 40, fontWeight: 700, margin: 0, marginBottom: 16, color: '#111827', lineHeight: 1.1 }}>
          Frequently Asked Questions on Products
        </h2>
        <p style={{ color: '#4b5563', fontSize: 16, margin: 0, lineHeight: 1.6, maxWidth: 420 }}>
          We don’t just deliver visuals—we build creative partnerships that leave a lasting impact. Hear directly from the people we’ve collaborated with, and discover how Opera has helped brands.
        </p>
      </div>
      <div className="faq-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {leftColFaqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item${openIndex === index ? " active" : ""}`}
              style={openIndex === index ? { boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)', background: 'linear-gradient(90deg, #ACE3FF 0%, #CAD1FF 100%)' } : {}}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                style={openIndex === index ? { background: 'linear-gradient(90deg, #ACE3FF 0%, #CAD1FF 100%)' } : {}}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: openIndex === index ? '#e0edff' : '#f3f4f6',
                    color: openIndex === index ? '#2563eb' : '#6b7280',
                    fontSize: 16,
                    marginRight: 8,
                  }}>
                    <img src={openIndex === index ? icon : cal} alt="icon" style={{ width: 28, height: 28 }}/>
                  </span>
                  <span style={{ fontWeight: openIndex === index ? 600 : 600, color: openIndex === index ? '#000000' : '#000000' }}>{faq.question}</span>
                </span>
                <img src={openIndex === index ? sub : plus} alt="icon" style={{ width: 28, height: 28 }}/>
              </button>
              {openIndex === index && (
                <div className="faq-answer" style={{ color: '#000000', fontWeight: 400 }}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {rightColFaqs.map((faq, i) => {
            const index = i + 3;
            return (
              <div
                key={index}
                className={`faq-item${openIndex === index ? " active" : ""}`}
                style={openIndex === index ? { boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)', background: 'linear-gradient(90deg, #ACE3FF 0%, #CAD1FF 100%)' } : {}}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  style={openIndex === index ? { background: 'linear-gradient(90deg, #ACE3FF 0%, #CAD1FF 100%)' } : {}}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: openIndex === index ? '#e0edff' : '#f3f4f6',
                      color: openIndex === index ? '#2563eb' : '#6b7280',
                      fontSize: 16,
                      marginRight: 8,
                    }}>
                      <img src={openIndex === index ? icon : cal} alt="icon" style={{ width: 28, height: 28 }}/>
                    </span>
                    <span style={{ fontWeight: openIndex === index ? 600 : 600, color: openIndex === index ? '#000000' : '#000000' }}>{faq.question}</span>
                  </span>
                  <img src={openIndex === index ? sub : plus} alt="icon" style={{ width: 28, height: 28 }}/>
                </button>
                {openIndex === index && (
                  <div className="faq-answer" style={{ color: '#000000', fontWeight: 400 }}>{faq.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
