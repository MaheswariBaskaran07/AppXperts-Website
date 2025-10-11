import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const AboutUsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navigation />
        <About />
        <Footer/>
        <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default AboutUsPage