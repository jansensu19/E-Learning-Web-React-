import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Subscription from './components/pages/Subscription';
import SignUp from './components/pages/SignUp';
import LearningPath from './components/pages/LearningPath';
import WebDeveloper from './components/pages/WebDeveloper';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/learningpath' element={<LearningPath/>} />
          <Route path='/webdeveloper' element={<WebDeveloper/>} />
          <Route path='/subscription' element={<Subscription/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
