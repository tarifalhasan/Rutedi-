import React from 'react';
import Container from '../Container';
import Rectangle1 from '../../public/images/Rectangle 1.svg';
import Rectangle2 from '../../public/images/Rectangle 2.svg';
import Image from 'next/image';
const Quote = () => {
  return (
    <section className="gradient py-10 relative overflow-hidden">
      <Container>
        <div className=" space-y-3 relative z-20">
          <h4 className=" uppercase text-base  font-bold text-center text-orange">
            quote{' '}
          </h4>
          <p className=" text-xl md:text-3xl text-white font-semibold text-center xl:max-w-[80%] mx-auto">
            “The function of good software is to make the complex appear to be
            simple” – Grady Booch{' '}
          </p>
        </div>
      </Container>
      <div className=" hidden md:block z-10 absolute left-0 top-0">
        <Image className=" w-full h-fit" src={Rectangle1} alt="Regtangle" />
      </div>
      <div className=" hidden md:block z-10 bottom-0 absolute right-0 top-0">
        <Image src={Rectangle2} alt="Regtangle" />
      </div>
    </section>
  );
};

export default Quote;
