'use client';

import React from 'react';
import Container from '../Container';
import Logo from '../Logo';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'team', 'contact', 'methodology'];
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

  const handleClick = (section: string): void => {
    setActiveLink(section);
  };
  return (
    <nav
      className={`fixed top-0 text-white w-full py-5 hidden border xl:block border-navbar-border  z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#34569C]' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className=" flex items-center justify-between">
          <div>
            <>
              <Link to={'home'}>
                <Logo />
              </Link>
            </>
          </div>
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
                className={`${
                  activeLink === 'home' ? 'active' : ''
                } text-xl font-normal  cursor-pointer`}
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
                className={`${
                  activeLink === 'services' ? 'active' : ''
                } text-xl font-normal cursor-pointer`}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="methodology"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick('methodology')}
                className={`${
                  activeLink === 'methodology' ? 'active' : ''
                } text-xl font-normal cursor-pointer`}
              >
                Methodology
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => handleClick('team')}
                className={`${
                  activeLink === 'team' ? 'active' : ''
                } text-xl font-normal cursor-pointer`}
              >
                Team
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
                className={`${
                  activeLink === 'contact' ? 'active' : ''
                } text-xl font-normal cursor-pointer`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
