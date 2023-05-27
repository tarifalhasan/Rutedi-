'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Test = () => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // Adjust the scroll position as needed
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveLink(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = section => {
    setActiveLink(section);
  };

  return (
    <div className="Home">
      <nav className="flex fixed top-0 left-0 right-0  justify-between items-center">
        <div className="logo">LOGO</div>
        <ul className="flex  gap-4 items-center">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick('home')}
              className={activeLink === 'home' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick('services')}
              className={activeLink === 'services' ? 'active' : ''}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick('about')}
              className={activeLink === 'about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleClick('contact')}
              className={activeLink === 'contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <section id="home" className=" min-h-screen">
        Home Section
      </section>
      <section id="services" className=" min-h-screen">
        Services Section
      </section>
      <section id="about" className=" min-h-screen">
        About Section
      </section>
      <section id="contact" className=" min-h-screen">
        Contact Section
      </section>
    </div>
  );
};

export default Test;
