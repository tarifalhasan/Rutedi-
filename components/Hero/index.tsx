'use client';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

import Container from '../Container';
import heroImg from '../../public/images/hero.png';

import { IoIosArrowDown } from 'react-icons/io';

const Hero = () => {
  return (
    <div
      id="home"
      className="relative bg-mobile-bg md:bg-bg-image bg-no-repeat w-full grid bg-cover h-full min-h-screen body-font"
    >
      <div className="relative">
        <Container>
          <div className="grid lg:grid-cols-2 place-items-center py-[10rem] md:py-[14rem]">
            <div className="">
              <h5 className="text-base font-bold text-orange">Best Software</h5>
              <p className="mb-8 text-3xl md:text-5xl text-white leading-relaxed">
                Let the software do your most time-consuming actions. We develop{' '}
                <span className="text-orange">custom software</span>
              </p>
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                <button className="btn_primary block">Let’s talk</button>
                <button className="btn_secondary">Schedule a meeting</button>
              </div>
            </div>
            <div className="absolute z-10 top-[12%] right-0 hidden lg:block">
              <Image
                className="object-cover max-w-[830px] w-full object-center rounded"
                alt="hero"
                src={heroImg}
              />
            </div>
          </div>
          <div className="pb-20 md:pb-11 absolute justify-center bottom-0 left-[37%] md:left-1/2">
            {
              <button
                onClick={() =>
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth',
                  })
                }
                className="flex-col items-center flex"
              >
                <span className="text-lg text-white">Scroll Down</span>
                <IoIosArrowDown className="text-white" />
              </button>
            }
          </div>
        </Container>
      </div>

      <div id="phone_call" className=" fixed bottom-0 pb-12 right-0">
        <button className="w-[80px] grid place-items-center h-[80px] rounded-full bg-orange text-white">
          <BsFillTelephoneFill size={32} />
        </button>
      </div>
    </div>
  );
};

export default Hero;
