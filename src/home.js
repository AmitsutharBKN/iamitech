import React from 'react';
import Header from './components/header/header.js';
import Banner from './components/banner/banner.js';
import Intro from './components/intro/intro.js';
import Skils from './components/skils/skils.js';
import Portfolio from './components/portfolio/portfolio.js';
import Socialmedia from './components/socialMedia/socialMedia.js';
import Footer from './components/footer/footer.js';
import { Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Container>
        <Row className='gx-5'>
          <div className='col-lg-12'>
            <Intro/>
          </div>
        </Row>
      </Container>
      <Skils/>
      <Socialmedia/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default Home;