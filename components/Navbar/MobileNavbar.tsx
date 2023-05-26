'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import Logo from '../Logo';
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };
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
    <nav className="navbar border-navbar-border border z-50 bg-[#2D5199] fixed left-0 py-5 right-0 xl:hidden px-4">
      <div className="flex justify-between">
        <Logo />

        <button onClick={() => openNavbar()}>
          <RiMenu3Fill className={`text-white`} size={25} />
        </button>
      </div>
      <div
        className={` fixed bg-[#2D5199]  border-navbar-border border mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full   ${
          isOpen ? 'right-0' : 'right-full'
        }  z-50 top-0 `}
      >
        <div className=" flex  items-center justify-between">
          <Logo />
          <RxCross2
            onClick={() => openNavbar()}
            className="text-white "
            size={36}
          />
        </div>
        <ul className="flex flex-col items-center pt-7 md:flex-row gap-6">
          {navLinks.map(link => (
            <li key={link.href} onClick={openNavbar}>
              <Link
                href={link.href}
                className="block py-2 pl-3 pr-4 text-white text-base leading-[19px] font-bold font-segoe"
                aria-current="page"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
