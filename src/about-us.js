import React from 'react';
import Header from './components/header/header.js';
import Intro from './components/intro/intro.js';
import Skils from './components/skils/skils.js';
import Socialmedia from './components/socialMedia/socialMedia.js';
import Footer from './components/footer/footer.js';

function About() {
  return (
    <>
      <Header/>
      <Intro/>
      <Skils/>
      <Socialmedia/>
      <Footer/>
    </>
  );
}

export default About;