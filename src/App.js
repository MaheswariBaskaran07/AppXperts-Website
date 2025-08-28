
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ClientsPage from './Pages/ClientPage';
import ProductsPage from './Pages/ProductsPage';
import ServicesPage from './Pages/ServicesPage';
import CareerPage from './Pages/CareerPage';
import ContactPage from './Pages/Contact';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProductDetailsCRM from './Pages/ProductDetailsCRM';
import ProductDetailsHRMS from './Pages/ProductDetailsHRMS';
import ProductDetailsHM from './Pages/ProductDetailsHM';
import ProductDetailsEcommerce from './Pages/ProductDetailsEcommerce';
import ProductDetailsSchool from './Pages/ProductDetailsSchool';


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/product-details-erp" element={<ProductDetailsPage />} />
        <Route path="/products/product-details-crm" element={<ProductDetailsCRM />} />
        <Route path="/products/product-details-hrms" element={<ProductDetailsHRMS />} />
        <Route path="/products/product-details-hm" element={<ProductDetailsHM />} />
        <Route path="/products/product-details-ecommerce" element={<ProductDetailsEcommerce />} />
        <Route path="/products/product-details-school" element={<ProductDetailsSchool />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path='/clients' element={<ClientsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/career' element={<CareerPage/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
