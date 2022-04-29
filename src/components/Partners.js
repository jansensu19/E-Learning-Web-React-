import React from "react";
import "../App.css";
import "./Partners.css";

function Partners() {
  return (
    <>
    <div className="partners-title">
        <h2>Trusted by</h2>
        </div>

      <div className="partners-container">
          <img className="partners-pic" src="images/logo/google.png"/>
          <img className="partners-pic" src="images/logo/microsoft.png"/>
          <img className="partners-pic" src="images/logo/aws.png"/>
          <img className="partners-pic" src="images/logo/ibm.png"/>
          <img className="partners-pic" src="images/logo/indosat.png"/>
          <img className="partners-pic" src="images/logo/kemenkraf.png"/>
      </div>
      <div className="partners-container">
          <img className="partners-pic" src="images/logo/lintasarta.png"/>
          <img className="partners-pic" src="images/logo/line.png"/>
          <img className="partners-pic" src="images/logo/alcatel.png"/>
          <img className="partners-pic" src="images/logo/samsung.png"/>
          <img className="partners-pic" src="images/logo/ericsson.png"/>
          <img className="partners-pic" src="images/logo/telkomtelstra.png"/>
      </div>
      <div className="partners-container">
          <img className="partners-pic" src="images/logo/lenovo.png"/>
          <img className="partners-pic" src="images/logo/intel.png"/>
          <img className="partners-pic" src="images/logo/xlaxiata.png"/>
          <img className="partners-pic" src="images/logo/kominfo.png"/>
          <img className="partners-pic" src="images/logo/kampusmerdeka.png"/>
          <img className="partners-pic" src="images/logo/bangkit.png"/>
      </div>
    </>
  );
}

export default Partners;
