import React from 'react';
import '../../App.css';
import Benefit from '../Benefit';
import Footer from '../Footer';
import SubCards from '../SubCards';

function Subscription() {
  return (
    <>
      <SubCards />
      <Benefit />
      <Footer />
    </>
  );
}

export default Subscription;