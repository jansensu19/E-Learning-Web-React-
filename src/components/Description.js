import React from "react";
import "../App.css";
import "./Description.css";
import Popup from "./popup";

function Description() {
  return (
    <>
      <div className="description-container">
        <div className="nav-tab">
          <ul className="description-tab">
            <li>
              <a href="/" className="active">
                Class Description
              </a>
            </li>
            <li>
              <a href="/">Testimony</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      

      <div className="description-info">
        <div className="desc-list">
        <h2>Description</h2>
        <p>
          Websites in today's era have become a major need that cannot be
          ignored. All business or education sectors can use the website as a
          tool for promotion, exchange of information, and others. Based on data
          from the World Wide Web Technology Surveys, of all active websites,
          88.2% use HTML, 95.6% use CSS and 95% use JavaScript. This class
          thoroughly discusses the basics of HTML, CSS and JavaScript as the
          three foundations of website creation.
        </p>
        <ul>
          <li>
            <p>The web is a platform that can be accessed through many kinds of devices. This is an advantage if you develop Web-based applications.</p>
          </li>
          <li>
            <p>Web development does not require a computer/laptop that has high specifications, so it is not an obstacle for those of you who do not have a capable device.</p>
          </li>
          <li>
            <p>The website is a platform that is reached by search engines such as Google Search, so the website is suitable as a medium for promoting business or content.</p>
          </li>
          <li>
            <p>Developing a website includes development that is easy to maintain and easy to publish.</p>
          </li>
        </ul>
        </div>

        <div className="specs-description-info">
            <h4>Learning Equipment</h4>
            <h5><i className="fas fa-microchip"></i>Processor</h5>
            <span>Intel Celeron (Core i3 and above Recommended)</span>
            <h4>Tools yang dibutuhkan untuk belajar:</h4>
            <span><i className="fad fa-window"></i>Web Browser (Google Chrome atau Mozilla Firefox)</span>
            <br />
            <br />
            <Popup />
        </div>
      </div>
      
      <div className="sub-border-description-info">
            <h3>Student Targets and Goals :</h3>
            <ul>
                <li>
                    <p>This class is intended for beginners who want to start their career in the field of web development (web creation) and need a strong foundation or foundation before studying deeper in the web field, with reference to international standards owned by Google Developers.</p>
                </li>
                <li>
                    <p>Classes can be attended by students who are IT literate so it is mandatory to have and be able to operate a computer well.</p>
                </li>
                <li>
                    <p>This class is designed for beginners so there are no prerequisites in prior understanding of programming.</p>
                </li>
                <li>
                    <p>Students must be able to learn independently, be committed, really have curiosity, and be interested in the subject matter, because no matter how good this class material is, it will not be useful without students' seriousness to learn, practice, and try.</p>
                </li>
            </ul>
        </div>
        <div className="subdescription-info">
            <h3>General and Specific Objectives of the Training :</h3>
            <ul>
                <li>
                    <p>At the end of the training, participants can create a simple website using programming code that complies with global standards.</p>
                </li>
                <li>
                    <p>Build a website using simple HTML, CSS, and JavaScript code.</p>
                </li>
                <li>
                    <p>Implement a good website structure using standard semantic HTML.</p>
                </li>
                <li>
                    <p>Demonstrating the preparation of website layouts using float or flexbox techniques.</p>
                </li>
            </ul>
        </div>
    </>
  );
}

export default Description;
