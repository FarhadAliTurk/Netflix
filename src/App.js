import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Row from './components/Row';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Row title="Trending Now" />
      <Row title="Top Rated" />
      <Row title="Action Movies" />
      <Row title="Comedy Movies" />
      <Footer />
    </div>
  );
}

export default App;