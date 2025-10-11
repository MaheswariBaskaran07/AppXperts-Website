import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BookingSection from '../components/ProuctDetails/BookingSection';
import ProductCRM from '../components/ProuctDetails/ProductCRM';
import FeaturesCRM from '../components/ProuctDetails/FeaturesCRM';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ProductDetailsCRM = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductCRM />
      <FeaturesCRM />
      <BookingSection />
      <Footer />
       <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default ProductDetailsCRM

    