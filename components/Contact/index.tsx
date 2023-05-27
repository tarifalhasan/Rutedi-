import React from 'react';
import Container from '../Container';

const Contact = () => {
  return (
    <div id="contact" className=" bg-[#F6F6F6] py-12 ">
      <Container>
        <div className="  flex gap-10  flex-col lg:flex-row ">
          <div className=" basis-[40%]">
            <h4 className="text-base font-bold text-orange ">Contact</h4>
            <h2 className=" text-[40px] font-semibold">Let’s talk</h2>
            <p className="text-xl font-medium text-slate-900">
              Feel free to contact us anytime. Just fill in form on the right
              side{' '}
            </p>
            <div className=" py-6">
              <div className=" flex items-center gap-4">
                <svg
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_18_6850)">
                    <path
                      d="M29.5673 24.7569V24.7504C29.5673 24.7504 23.9008 19.0904 23.8973 19.0877C23.448 18.6382 22.7295 18.6479 22.2875 19.0907L19.6793 21.7097C18.6653 22.7239 17.3578 21.8239 14.848 19.7774C13.1875 18.4234 11.277 16.6027 9.62054 14.5499C8.45804 13.1097 7.43004 11.5972 8.49204 10.5354C8.49479 10.5327 11.111 7.92318 11.1105 7.92043L11.1125 7.91493C11.582 7.44543 11.5365 6.72618 11.1078 6.29693V6.29043C11.1078 6.29043 5.27754 0.467434 5.27429 0.463934C4.82504 0.0146838 4.10679 0.0246838 3.66454 0.466934L1.03704 3.09443C-0.0454621 4.44918 -2.45121 10.9059 7.86254 21.4779C18.7275 32.6157 25.7385 30.2332 26.9455 28.9764C26.9455 28.9764 29.5703 26.3827 29.5703 26.3802L29.5725 26.3749C30.042 25.9052 29.9958 25.1864 29.5673 24.7569Z"
                      fill="#FFA500"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_18_6850">
                      <rect
                        width="30"
                        height="30"
                        fill="white"
                        transform="translate(0 0.131348)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" text-2xl text-slate-900">
                  +123 456 789 789
                </span>
              </div>
            </div>
            <div>
              <svg
                width="109"
                height="31"
                viewBox="0 0 109 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_18_6852)">
                  <path
                    d="M30 15.1313C30 6.84708 23.2843 0.131348 15 0.131348C6.71573 0.131348 0 6.84708 0 15.1313C0 23.4156 6.71573 30.1313 15 30.1313C23.2843 30.1313 30 23.4156 30 15.1313Z"
                    fill="#1F4690"
                  />
                  <path
                    d="M12.7574 15.436L6.00745 11.5388V19.3331L12.7574 15.436Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M12.7574 7.64324L6.00745 3.74609V11.5404L12.7574 7.64324Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M12.7574 23.2224L6.00745 19.3254V27.1196L12.7574 23.2224Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M6.00745 11.5337L12.7574 15.4309V7.63672L6.00745 11.5337Z"
                    fill="#FFE5B4"
                  />
                  <path
                    d="M6.00745 19.3256L12.7574 23.2228V15.4285L6.00745 19.3256Z"
                    fill="#FFE5B4"
                  />
                  <path
                    d="M19.5076 19.3256L12.7574 15.4285V23.2228L19.5076 19.3256Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M12.7574 7.64324L19.5074 11.5404L19.5076 3.74609L12.7574 7.64324Z"
                    fill="#FFE5B4"
                  />
                  <path
                    d="M12.7574 15.436L19.5074 19.3331L19.5076 11.5388L12.7574 15.436Z"
                    fill="#FFE5B4"
                  />
                  <path
                    d="M12.7574 23.2224L19.5074 27.1196L19.5076 19.3254L12.7574 23.2224Z"
                    fill="#FFE5B4"
                  />
                  <path
                    d="M26.2397 23.2224L19.5072 19.3254V27.1196L26.2397 23.2224Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M26.2472 15.436L19.4998 11.5388V19.3331L26.2472 15.436Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M26.2472 7.64324L19.4998 3.74609V11.5404L26.2472 7.64324Z"
                    fill="#FFA500"
                  />
                  <path
                    d="M19.4927 11.5337L26.2542 15.4309V7.63672L19.4927 11.5337Z"
                    fill="#FFE5B4"
                  />
                </g>
                <path
                  d="M56.432 21.8353C55.264 22.9073 53.752 23.4433 51.896 23.4433C50.04 23.4433 48.52 22.9073 47.336 21.8353C46.168 20.7473 45.584 19.2993 45.584 17.4913V6.33135H47.816V17.3953C47.816 18.5793 48.168 19.5233 48.872 20.2273C49.576 20.9153 50.584 21.2593 51.896 21.2593C53.208 21.2593 54.216 20.9153 54.92 20.2273C55.624 19.5233 55.976 18.5793 55.976 17.3953V6.33135H58.184V17.4913C58.184 19.2993 57.6 20.7473 56.432 21.8353ZM72.3489 6.33135V8.44335H67.3809V23.1313H65.1729V8.44335H60.2289V6.33135H72.3489ZM76.7898 21.0193H84.5898V23.1313H74.5578V6.33135H84.4698V8.44335H76.7898V13.6033H83.8698V15.6913H76.7898V21.0193ZM93.8364 6.33135C96.1244 6.33135 98.0204 7.14735 99.5244 8.77935C101.044 10.3953 101.804 12.3793 101.804 14.7313C101.804 17.0833 101.044 19.0753 99.5244 20.7073C98.0204 22.3233 96.1244 23.1313 93.8364 23.1313H87.2844V6.33135H93.8364ZM93.8364 21.0193C95.5484 21.0193 96.9484 20.4193 98.0364 19.2193C99.1244 18.0193 99.6684 16.5233 99.6684 14.7313C99.6684 12.9393 99.1244 11.4433 98.0364 10.2433C96.9484 9.04335 95.5484 8.44335 93.8364 8.44335H89.5164V21.0193H93.8364ZM104.511 6.33135H106.743V23.1313H104.511V6.33135Z"
                  fill="#1A1A1A"
                />
                <defs>
                  <clipPath id="clip0_18_6852">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(0 0.131348)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div>
            <div className="">
              <div className="flex flex-wrap flex-col md:flex-row -m-2">
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name and last name"
                      id="name"
                      name="name"
                      className="w-full bg-[#fff] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full md:w-1/2">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      name="email"
                      className="w-full bg-[#fff] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <textarea
                      id="message"
                      placeholder="Enter message"
                      name="message"
                      className="w-full bg-[#fff] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="btn_primary w-full uppercase">send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
