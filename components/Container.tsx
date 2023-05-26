import React from 'react';

interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return (
    <div className={`max-w-[1440px] md:px-10 lg:px-5 xl:px-20  px-4 mx-auto `}>
      {children}
    </div>
  );
};

export default Container;
