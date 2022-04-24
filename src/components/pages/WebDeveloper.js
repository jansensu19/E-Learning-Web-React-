import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import SubHeroSection from '../SubHeroSection';
import InfoCard from '../InfoCard';
import Description from '../Description';
import Testimony from '../Testimony';

function Home() {
  return (
    <>
    <SubHeroSection />
    <InfoCard />
    <Description />
    <hr />
    <Testimony />
    <Footer />
    </>
  );
}

export default Home;