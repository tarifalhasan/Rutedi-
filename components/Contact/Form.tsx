import React from 'react';

const Form = () => {
  return (
    <div className=" basis-[60%] w-full">
      <div className=" grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Enter your name and last name"
          id="name"
          name="name"
          className="w-full bg-[#fff] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <input
          type="email"
          placeholder="Enter your email "
          id="email"
          name="email"
          className="w-full bg-[#fff] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <textarea
        id="message"
        placeholder="Enter message"
        name="message"
        className="w-full bg-[#fff] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        defaultValue={''}
      />

      <button className="btn_primary w-full">sent</button>
    </div>
  );
};

export default Form;
