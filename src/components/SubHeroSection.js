import React from 'react';
import '../App.css';
import { Button } from './Button';
import './SubHeroSection.css';

function SubHeroSection() {
  return (
    <div className='subhero-container'>
      <img src="images/webdeveloper.jpg"/>
      <div className="info-class">
        <h2><i class="fas fa-star"></i> 4.86</h2>
        <h1>Web Developer Learning</h1>
      <div className="label-class">
        <h2><i class="fas fa-graduation-cap"></i> Level: Beginner &nbsp;</h2>
        <h2><i class="far fa-clock"></i> 55 Hours Learn</h2>
      </div>
      <p>Learn the basic components of HTML, CSS, and JavaScript which are the main foundation for becoming a web developer.</p>
      <img className='logo' src="images/microsoft.png" />
      </div>
      <div className="learn-box">
      <Button
          className='btn-enroll' buttonStyle='btn--more' buttonSize='btn--moreonly'
        >
          Learn Now
        </Button>
        <span></span>
        <Button
          className='btn-enroll' buttonStyle='btn--more' buttonSize='btn--moreonly'
        >
          Class Information
        </Button>
        <Button
          className='btn-enroll' buttonStyle='btn--more' buttonSize='btn--moreonly'
        >
          View Syllabus
        </Button>
      </div>
    </div>
  );
}

export default SubHeroSection;
