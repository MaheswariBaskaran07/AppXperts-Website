import lamp from "../../assets/Product/freepik--Lamps--inject-229.png";
import people from "../../assets/Product/Product presentation-bro (1) 1.png";

const Product = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        fontFamily: "Poppins",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top center, rgba(167, 195, 253, 0.8) 0%, rgba(207, 226, 249, 0.84) 60%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      {/* 🔹 Lamps Row (4 across top) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "250px",
          paddingTop: "20px",
        }}
      >
        <img src={lamp} alt="Lamp" style={{ width: "250px" }} />
        <img src={lamp} alt="Lamp" style={{ width: "250px" }} />
        {/* <img src={lamp} alt="Lamp" style={{ width: "500px" }} /> */}
      </div>

      {/* 🔹 Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          marginTop: "50px",
        }}
      >
        {/* <span
          style={{
            display: "block",
            background: "#003399",
            color: "white",
            padding: "6px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "500",
            transform: "rotate(-20deg)",
            marginBottom: "-25px",
            marginLeft: "100px",
            width: "fit-content",
          }}
        >
          About Us
        </span> */}

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            margin: "20px 0",
            color: "#000",
          }}
        >
        Smart Products. Real Impact.

          <br />
          Where innovation meets purpose.
        </h1>

        <p
          style={{
            fontSize: "16px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "#333",
          }}
        >
        Explore our curated suite of digital solutions designed to solve real-world challenges with simplicity, scalability, and smart technology at their core..
        </p>
      </div>

   

      {/* 🔹 People Illustration at Bottom */}
      <img
        src={people}
        alt="People"
        style={{
          position: "absolute",
          bottom: "0",
          top:"200px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1500px",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Product;
