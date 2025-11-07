import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Product from '../components/Products/Product';
import Softwares from '../components/Products/Softwares';
import FAQ from '../components/Products/FAQ';
import ProductDetails from '../components/ProuctDetails/ProductDetails';
import FeaturesSection from '../components/ProuctDetails/FeaturesSection';
import BookingSection from '../components/ProuctDetails/BookingSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ChatBot from '../components/ChatBot';

const ProductDetailsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <ProductDetails />
      <FeaturesSection />
      <BookingSection />
      <Footer />
       <FloatingWhatsApp phone={'+91 88255 28905'} />
       <ChatBot />
    </div>
  )
}

export default ProductDetailsPage

    