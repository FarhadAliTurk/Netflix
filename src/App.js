import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/sale" element={<ProductList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
