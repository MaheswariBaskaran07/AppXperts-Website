import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import eclipse from "../../assets/Product/Ellipse 11.png";
import people from "../../assets/Product/Product presentation-bro (1) 1.png";
import plant from "../../assets/Product/Product presentation-bro (1) 1.png";

const Product = () => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #fff 60%, #eaf6fb 100%)",
        fontFamily: "Poppins, Arial, sans-serif",
        padding: "0 0 0 0",
        minHeight: 520,
        width: "100%",
        position: "relative"
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "48px 32px 0 32px",
        minHeight: 480,
        position: "relative"
      }}>
        {/* Left: Illustration */}
        <div style={{ flex: 1.2, minWidth: 320, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Eclipse background */}
          <img
            src={eclipse}
            alt="Eclipse"
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              zIndex: 0,
              maxWidth: 420
            }}
          />
          {/* People illustration */}
          <img
            src={people}
            alt="People"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: 420,
              minWidth: 260
            }}
          />
        </div>
        {/* Right: Text and blue plants */}
        <div style={{ flex: 2, minWidth: 320, textAlign: 'left', paddingLeft: 48, position: 'relative' }}>
          <h1 style={{
            fontSize: 44,
            fontWeight: 600,
            color: '#222',
            marginBottom: 16,
            lineHeight: 1.18,
            letterSpacing: 0.2,
            maxWidth: 600
          }}>
            Smart Products. Real Impact.<br />
            Where innovation meets purpose.
          </h1>
          <p style={{
            color: '#444',
            fontSize: 17,
            maxWidth: 520,
            marginBottom: 0,
            marginTop: 0,
            lineHeight: 1.7
          }}>
            Explore our curated suite of digital solutions designed to solve real-world challenges — with simplicity, scalability, and smart technology at their core.
          </p>
          {/* Blue plants accent, right side */}
          <div style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <img src={plant} alt="Plant" style={{ width: 60, marginBottom: -8 }} />
            <img src={plant} alt="Plant" style={{ width: 40, marginLeft: 32 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
