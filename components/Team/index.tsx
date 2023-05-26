import React from 'react';
import Container from '../Container';
import team1 from '../../public/images/team/1.svg';
import Image from 'next/image';
const Team = () => {
  return (
    <section className="py-16">
      <Container>
        <div className=" space-y-4">
          <h4 className="text-base font-bold text-orange text-center">TEAM</h4>
          <div className=" space-y-2">
            <h2 className="text-4xl text-slate-900 text-center capitalize font-semibold">
              Edison Pizarro
            </h2>
            <p className=" text-lg text-slate-900 text-center uppercase">
              Desarrollador & Founder
            </p>
          </div>
          <Image
            className=" mx-auto max-w-[368px] block w-full h-full object-cover"
            src={team1}
            alt="team"
          />
        </div>
      </Container>
    </section>
  );
};

export default Team;
