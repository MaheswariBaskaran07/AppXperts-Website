import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutUsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
        <Navigation />
        <About />
        <Footer/>
    </div>
  )
}

export default AboutUsPage