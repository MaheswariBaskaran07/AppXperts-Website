
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


function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/product-details" element={<ProductDetailsPage />} />
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
