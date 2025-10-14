import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { Helmet } from "react-helmet-async";

const AboutUsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Helmet>
  <title>About AppXperts – Who We Are & Our Mission</title>
  <meta
    name="description"
    content="Learn about AppXperts Enterprise Solutions — our vision, mission, and expert team dedicated to providing innovative digital and enterprise solutions."
  />
  <meta property="og:url" content="https://www.appxes.com/about" />
  <link rel="canonical" href="https://www.appxes.com/about" />
</Helmet>

    <div>
        <Navigation />
        <About />
        <Footer/>
        <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
    </>
  )
}

export default AboutUsPage