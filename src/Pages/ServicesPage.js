import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Service from '../components/Service/Service';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
    <Helmet>
  <title>Our Services – Xperts Software Solutions Private Limited</title>
  <meta
    name="description"
    content="Explore Xperts Software Solutions Private Limited's range of services including software development, cloud solutions, mobile apps, and UI/UX design tailored to your business needs."
  />
  <meta property="og:url" content="https://www.appxes.com/services" />
  <link rel="canonical" href="https://www.appxes.com/services" />
</Helmet>

    <div>
        <Navigation />
        <Service />
        <Footer/>
        <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
    </>
  )
}

export default ServicesPage