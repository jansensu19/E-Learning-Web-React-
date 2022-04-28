import React from 'react';
import '../../App.css';
import Benefit from '../Benefit';
import Footer from '../Footer';
import Testimony from '../Testimony';
import SubCards from '../SubCards';
import Partners from '../Partners';

function Subscription() {
  return (
    <>
      <SubCards />
      <Benefit />
      <Testimony />
      <Partners />
      <Footer />
    </>
  );
}

export default Subscription;