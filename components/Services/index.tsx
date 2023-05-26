import React from 'react';
import Container from '../Container';
import AutomationLogo from '../../public/images/services/1.svg';
import DigitalTransformation from '../../public/images/services/2.svg';
import Monitoringandalert from '../../public/images/services/3.svg';
import DataRecollection from '../../public/images/services/4.svg';
import ReportsGeneration from '../../public/images/services/5.svg';
import Image from 'next/image';
const Services = () => {
  const servicesData = [
    {
      name: 'Automation',
      description:
        'Sollicitudin auctor id urna, elementum nunc. Sit ultricies ipsum sed id condimentum.',
      icon: AutomationLogo,
    },
    {
      name: 'Monitoring and alert ',
      description:
        'Bibendum ipsum tellus diam nisi, auctor. Quisque amet, habitasse faucibus malesuada ut. ',
      icon: Monitoringandalert,
    },
    {
      name: 'Digital transformation ',
      description:
        'Eget vestibulum sagittis, adipiscing porta. Mauris egestas felis, habitasse  arcu metus, tempus. ',
      icon: DigitalTransformation,
    },
    {
      name: 'Datarecollection',
      description:
        'Sed turpis justo dolor integer maecenas integer congue sed pharetra. Etiam vel id tempus cras nulla. ',
      icon: DataRecollection,
    },
    {
      name: 'Reports generation',
      description:
        'Et arcu, elementum, leo aliquet. Morbi nunc, magna adipiscing dictumst pulvinar sit nam egestas.',
      icon: ReportsGeneration,
    },
  ];

  return (
    <section className=" py-5 lg:py-24">
      <Container>
        <div className=" gap-9 grid md:grid-cols-2 xl:grid-cols-3">
          <div className=" bg-muted py-7 px-6 min-h-[300px] rounded-md grid place-items-center">
            <div>
              <span className="title uppercase text-orange text-base font-bold">
                Services
              </span>
              <p className=" text-4xl font-semibold">
                We develop smart solutions for
              </p>
            </div>
          </div>

          {servicesData.map((data, key) => (
            <div
              key={key}
              className=" bg-muted py-7 px-6 min-h-[300px] rounded-md grid place-items-center"
            >
              <div className=" grid place-items-center space-y-2">
                <Image src={data.icon} alt={data.name} />
                <h3 className="title pt-4 uppercase text-center  text-slate-900 text-2xl font-bold">
                  Automation
                </h3>
                <p className=" text-base text-center font-normal">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
