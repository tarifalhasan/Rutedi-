import React from 'react';
import Container from '../Container';
import immertion from '../../public/images/Immersion.svg';
import Prototype from '../../public/images/Prototype.svg';
import Product from '../../public/images/Productsvg.svg';

import Image from 'next/image';
const Methodology = () => {
  interface cardProps {
    bg: string;

    btnColor: string;
    image: any;
    title: string;
    subTitle: string;
    description: string;
    imgOrder: string;
    btnBorderColor: string;
    btnColorText: string;
  }

  const Card: React.FC<cardProps> = ({
    bg,

    btnColor,
    image,
    title,
    subTitle,
    description,
    imgOrder,
    btnBorderColor,
    btnColorText,
  }) => (
    <div
      className={`${bg} min-h-[440px] rounded-md gap-10 py-10 px-7 flex flex-col lg:flex-row items-center`}
    >
      <div className={imgOrder}>
        <Image className=" w-full object-cover" src={image} alt="immertion" />
      </div>
      <div className=" space-y-4">
        <h2 className="text-[32px]  leading-9 font-bold text-slate-900">
          {title}
        </h2>
        <p className=" text-xl font-bold text-slate-900">{subTitle}</p>
        <p className="text-xl font-medium text-slate-900">{description}</p>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
          <button className={`btn_primary block ${btnColor}`}>
            Let’s talk{' '}
          </button>
          <button
            className={`btn_secondary ${btnColorText} ${btnBorderColor} `}
          >
            Schedule a meeting
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div id="methodology" className=" pb-24">
      <Container>
        <div className="  ">
          <div className="pb-16">
            <p className="text-base text-center text-orange font-bold">
              Methodology
            </p>
            <h2 className=" text-4xl font-semibold text-center text-slate-900">
              Recurrent feedback
            </h2>
          </div>
          <div className=" space-y-5">
            <Card
              image={immertion}
              title="Immersion "
              subTitle="We start by understanding your business "
              description="We meet your team and understanding your operations so we can decide what needs to be done and how"
              imgOrder=" order-first"
              btnColor="!bg-[#FFA500]"
              btnBorderColor=" !border-[#FFA500]"
              bg="bg-[#E1F4FF]"
              btnColorText=" !text-[#FFA500]"
            />
            <Card
              image={Prototype}
              title="Prototype "
              subTitle="We propose how your challenge should be solved."
              description="This proposition is validated by your team"
              imgOrder=" order-first lg:order-last"
              btnColor="!bg-[#1F4690]"
              btnBorderColor=" !border-[#1F4690]"
              btnColorText=" !text-[#1F4690]"
              bg="bg-[#FFF4DE]"
            />
            <Card
              image={Product}
              title="Product "
              subTitle="The product is developed in weekly steps. "
              description="Every iteration is accepted by your team, this way we make sure we are delivering the correct solution"
              imgOrder=" order-first"
              btnColor="!bg-[#FFA500]"
              btnBorderColor=" !border-[#FFA500]"
              bg="bg-[#E1F4FF]"
              btnColorText=" !text-[#FFA500]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Methodology;
