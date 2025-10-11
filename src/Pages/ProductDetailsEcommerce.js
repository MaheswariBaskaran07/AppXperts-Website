import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BookingSection from '../components/ProuctDetails/BookingSection';
import ProductEcommerce from '../components/ProuctDetails/ProductEcommerce';
import FeaturesEcommerce from '../components/ProuctDetails/FeaturesEcommerce';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const ProductDetailsEcommerce = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductEcommerce />
      <FeaturesEcommerce />
      <BookingSection />
      <Footer />
       <FloatingWhatsApp phone={'+91 88255 28905'} />
    </div>
  )
}

export default ProductDetailsEcommerce

    