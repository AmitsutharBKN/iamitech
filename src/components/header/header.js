import { Container, Navbar } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../header/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (    
      <header className={scrolled ? 'scrolled' : ''}>
        <Navbar className='pageHeader'>
          <Container fluid>
            <Navbar.Brand to="/">Amit Suthar</Navbar.Brand>
            <Navbar.Toggle />
             <Navbar.Collapse className="justify-content-center navMenu-links">
              <Link to="/">Home</Link >
              <Link to="/about-us">About Us</Link >
              <Link to="/portfolio">Portfolio</Link >
              <Link to="/contact">Contact</Link >
            </Navbar.Collapse> 
          </Container>
        </Navbar>
      </header>
  );
}

export default Header;