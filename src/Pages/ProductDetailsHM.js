import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BookingSection from '../components/ProuctDetails/BookingSection';
import FeaturesCRM from '../components/ProuctDetails/FeaturesCRM';
import ProductHM from '../components/ProuctDetails/ProductHM';
import FeaturesHM from '../components/ProuctDetails/FeaturesHM';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ProductDetailsHM = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductHM />
      <FeaturesHM />
      <BookingSection />
      <Footer />
       <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default ProductDetailsHM

    