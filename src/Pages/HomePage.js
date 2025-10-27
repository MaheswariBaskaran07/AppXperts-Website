import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Home from "../components/Home/Home";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Solutions from "../components/Home/Solutions";
import ClientsSay from "../components/Home/ClientsSay";
import Booking from "../components/Home/Booking";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>AppXperts – Digital Solutions & Enterprise Software Development</title>
        <meta
          name="description"
          content="<strong>AppXperts Enterprise Solutions (Xperts Software Solutions Private Limited)</strong> offers expert software development, digital transformation, UI/UX design, cloud solutions, and enterprise app development to help businesses innovate and grow."
        />
        <meta
          name="keywords"
          content="AppXperts, <strong>AppXperts Enterprise Solutions (Xperts Software Solutions Private Limited)</strong>, software development, enterprise solutions, digital transformation, UI UX design, web development, mobile apps, cloud technology"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AppXperts – Digital Solutions & Enterprise Software Development" />
        <meta
          property="og:description"
          content="Empowering businesses with cutting-edge software, digital solutions, and enterprise technology from AppXperts."
        />
        <meta property="og:url" content="https://www.appxes.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.appxes.com/logo.png" />
        <link rel="canonical" href="https://www.appxes.com/" />
      </Helmet>

      {/* ✅ Page Content */}
      <div>
        <Navigation />
        <Home />
        <Solutions />
        <ClientsSay />
        {/* <Booking /> */}
        <Footer />
        <FloatingWhatsApp phone="+91 88255 28905" />
      </div>
    </>
  );
};

export default HomePage;
