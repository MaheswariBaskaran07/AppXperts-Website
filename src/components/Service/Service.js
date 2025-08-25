import serviceBanner from "../../assets/Services/ServiceBanner.png";
import CallToAction from "./CallToAction";
import OurService from "./OurService";

const Service = () => { 
    return (
        <>
         <div
            style={{
                position: "relative",
                textAlign: "center",
                padding: "40px 20px 100px", // 👈 less padding on top
                fontFamily: "Poppins",
                backgroundImage: `url(${serviceBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start", // 👈 align content to top
                alignItems: "center",
                overflow: "hidden",
            }}
            >
            {/* 🔹 Radial Gradient Overlay */}
            <div
                style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                    "radial-gradient(circle at top center, rgba(167, 195, 253, 0.8) 0%, rgba(207, 226, 249, 0.84) 60%, rgba(255, 255, 255, 1) 100%)",
                zIndex: -1,
                }}
            ></div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", marginTop: "50px" }}>
                {/* Heading */}
                <h1
                style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    margin: "20px 0",
                    color: "#000",
                }}
                >
                Smart Solutions, Seamless <br/>
                Experiences.
                </h1>

                {/* Description */}
                <p
                style={{
                    fontSize: "16px",
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: "1.6",
                    color: "#333",
                }}
                >
                From concept to execution, AppXperts delivers end-to-end digital services that power your growth. Whether it’s mobile apps, web platforms, UI/UX, or branding — we build future-ready solutions tailored to your vision.
                </p>
            </div>
         </div>
         <OurService />
         <CallToAction />
        </>
    )
}
export default Service;