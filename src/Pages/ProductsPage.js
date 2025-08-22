import { useEffect } from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Product from '../components/Products/Product';

const ProductsPage = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Navigation />
      <Product />
      <Footer />
    </div>
  )
}

export default ProductsPage

    