import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Aboutme from '../Aboutme';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Aboutme />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
