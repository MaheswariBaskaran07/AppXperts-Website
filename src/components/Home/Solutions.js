import React from "react";
import Icon from "../../assets/Home/Icon.png";
import Icon1 from "../../assets/Home/Icon (1).png";
import Icon2 from "../../assets/Home/Icon (2).png";

const Solutions = () => {
  return (
    <section style={{ padding: "20px 20px", textAlign: "center", fontFamily: 'Poppins' }}>
      {/* Heading */}
      <h2 style={{ fontSize: "60px", fontWeight: "200", marginBottom: "40px" }}>
        Crafting Solutions in...
      </h2>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            flex: "1 1 280px",
            maxWidth: "320px",
            textAlign: "center",
          }}
        >
          <img src={Icon} alt="IT Software" style={{ height: 60, marginBottom: 16 }} />
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
            IT Software Development
          </h3>
          <p style={{ fontSize: "17px", color: "#555" }}>
            Customized software solutions tailored to your business goals,
            ensuring performance, scalability, and seamless integration.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            flex: "1 1 280px",
            maxWidth: "320px",
            textAlign: "center",
          }}
        >
          <img src={Icon1} alt="Digital Marketing" style={{ height: 60, marginBottom: 16 }} />
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
            Digital Marketing
          </h3>
          <p style={{ fontSize: "17px", color: "#555" }}>
            Boost your online presence through SEO, strategic ads, and social
            media marketing to engage clients and drive measurable results.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background: "#fff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            flex: "1 1 280px",
            maxWidth: "320px",
            textAlign: "center",
          }}
        >
          <img src={Icon2} alt="Brand Identity" style={{ height: 60, marginBottom: 16 }} />
          <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px" }}>
            Brand Identity
          </h3>
          <p style={{ fontSize: "17px", color: "#555" }}>
            Creating strong, memorable brand identities that resonate with your
            audience and build long-term trust.
          </p>
        </div>
      </div>

      {/* Learn More Button */}
      <div style={{ margin: '0 auto 32px auto', textAlign: 'center' }}>
        <a href="#learnmore" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #2ecbfa 0%, #1a3fa6 100%)',
          color: '#fff',
          padding: '12px 36px',
          borderRadius: 22,
          fontWeight: 600,
          fontSize: 16,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(26,63,166,0.08)',
          transition: 'background 0.2s',
          fontFamily: 'Poppins, Arial, sans-serif'
        }}>Learn More</a>
      </div>
      {/* Moving blue ticker */}
      <div
        style={{
          overflow: "hidden",
          //  background: "linear-gradient(90deg, #ffffff 40%, #b3e7f7ff 100%)",
           background:"#b3e7f7ff",
         
          color: "#fff",
          padding: "12px 0",
          position: "relative",
          width: "100%"
        }}
      >
        {(() => {
          const tags = [
            "IT Software Development",
            "Digital Marketing",
            "Branding",
            "Website Development & Maintenance"
          ];
          return (
            <div className="tag-list" style={{ width: "100%", display: "flex", alignItems: "center" }}>
              <div className="inner" style={{ display: "flex", width: "max-content", animation: "loop 15s linear infinite", gap: 64, minWidth: '2200px' }}>
                {tags.concat(tags).map((tag, idx) => (
                  <div
                    className="tag"
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: "linear-gradient(90deg, #2ecbfa 0%, #1a3fa6 50%, #2ecbfa 100%)",
                      color: '#fff',
                      borderRadius: 4,
                      padding: '3px 24px',
                      marginRight: 0,
                      fontSize: 15,
                      fontWeight: 500,
                      boxShadow: '0 1px 4px #1a3fa611',
                      border: 'none',
                      height: 32,
                      minWidth: 220,
                      justifyContent: 'center',
                      letterSpacing: 0.2
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>

      {/* Keyframes for infinite scroll */}
      <style>
        {`
          @keyframes loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default Solutions;
