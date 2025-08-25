import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Service from '../components/Service/Service';

const ServicesPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navigation />
        <Service />
        <Footer/>
    </div>
  )
}

export default ServicesPage