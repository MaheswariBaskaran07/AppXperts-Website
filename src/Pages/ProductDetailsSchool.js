import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BookingSection from '../components/ProuctDetails/BookingSection';
import ProductHRMS from '../components/ProuctDetails/ProductHRMS';
import FeaturesHRMS from '../components/ProuctDetails/FeatursHMRS';
import ProductSchool from '../components/ProuctDetails/ProductSchool';
import FeaturesSchool from '../components/ProuctDetails/FeaturesSchool';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ProductDetailsSchool = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductSchool />
      <FeaturesSchool />
      <BookingSection />
      <Footer />
       <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default ProductDetailsSchool

    