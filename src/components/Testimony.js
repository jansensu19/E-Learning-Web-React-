import React from "react";
import "../App.css";
import "./Testimony.css";

function Testimony() {
  return (
    <>
    <div className="testimony-title" id="testimony-title">
        <h2>Student Testimonials</h2>
        <p>Thousands of successful students study at Dicoding Academy. What are they saying? Here are their original testimonials.</p>
        </div>

      <div className="testimony-container">
          <div className="testimony-card">
          <img className="testimony-pic" src="images/greg.jpg"/>
              <div className="testimony-info">
              <h4>Hilman Maulana Anhar</h4>
              <span>Asia e University</span>
              <div className="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
              </div>
              <p>Learning programming in coding is very easy to understand and the material and exercises are also interesting.</p>
          </div>
          <div className="testimony-card">
          <img className="testimony-pic" src="images/greg.jpg"/>
              <div className="testimony-info">
              <h4>Hilman Maulana Anhar</h4>
              <span>Asia e University</span>
              <div className="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
              </div>
              <p>Learning programming in coding is very easy to understand and the material and exercises are also interesting.</p>
          </div>
      </div>
    </>
  );
}

export default Testimony;
