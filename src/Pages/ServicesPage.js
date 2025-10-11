import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Service from '../components/Service/Service';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ServicesPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navigation />
        <Service />
        <Footer/>
        <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default ServicesPage