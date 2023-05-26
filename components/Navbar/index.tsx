'use client';

import React from 'react';
import Container from '../Container';
import Logo from '../Logo';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'Methodology',
      href: '#methodology',
    },
    {
      label: 'Team ',
      href: '#team',
    },
    {
      label: 'Contact us',
      href: '#contact',
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <nav
      className={`fixed top-0 text-white w-full py-5 hidden border xl:block border-navbar-border  z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#34569C]' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className=" flex items-center justify-between">
          <div>
            <Link href={'/'}>
              <Logo />
            </Link>
          </div>
          <ul className=" flex items-center gap-4">
            {navLinks.map((link, key) => (
              <li key={key}>
                <Link className=" text-xl font-normal" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
