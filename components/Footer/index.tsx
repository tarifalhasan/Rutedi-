import { useState, useEffect } from 'react';

import Container from '../Container';
import Logo from '../Logo';
import Link from 'next/link';

const Footer = () => {
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

  return (
    <footer className="footer relative py-16">
      <Container>
        <div className=" space-y-5">
          <div className="  flex justify-center">
            <Logo />
          </div>
          <div>
            <ul className=" flex flex-col md:flex-row  py-5 justify-center text-white items-center gap-4">
              {navLinks.map((link, key) => (
                <li key={key}>
                  <Link className=" text-xl font-normal" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" w-full right-0 absolute flex justify-center top-[85%] md:top-[70%] ">
            <h4 className="text-center  text-xl font-medium text-white">
              Copyright. All rights reserved 2022
            </h4>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
