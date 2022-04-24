import React from 'react';
import Popup from 'reactjs-popup';
import "./popup.css";


export default () => (
  <Popup
    trigger={<button className="button-popup"> View all study equipment </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> </div>
        <div className="content">
          {' '}
          <div className="popup-title-info">
          <h1>Study Equipment</h1>
          <h4>Minimum device specifications</h4>
          <p>This class requires the following device specifications:</p>
        </div>

        <div className="popup-specs-info">
        <span><i className="far fa-save"></i>RAM</span>
        <span className="longer-info"><i className="far fa-expand-alt"></i>Screen</span>
        </div>

        <div className="popup-specs-info">
        <p>1GB</p>
        <p className="longer-info">1366 x 768 (Recommended Full HD 1920 x 1080)</p>
        </div>
        

        <div className="popup-specs-info">
          <span><i className="fad fa-window"></i>Operating System</span>
          <span className="longer-info-2"><i className="far fa-computer-classic"></i>Processor</span>
        </div>

        <div className="popup-specs-info">
          <p>Windows, Linux, MacOS</p>
          <p className="longer-info-2">Intel Celeron (Recommended I3 Core Up)</p>
        </div>

        <div className="popup-tools-info">
          <h4>Tools</h4>
          <p>This class requires the following tools:</p>
          </div>
        
        <div className="tools-info">
          <span><i className="far fa-globe"></i>Web Browser (Google Chrome or Mozilla Firefox)</span>
          <span><i className="far fa-globe"></i>Text Editor (VSCode, Atom, or Emacs)</span>
        </div>
        </div>
        <div className="actions">
        </div>
      </div>
    )}
  </Popup>
);