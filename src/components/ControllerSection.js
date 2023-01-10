import React from 'react';
import { controller, controllerMobile } from '../constants/imageLinks';

function ControllerSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-24 px-5 lg:px-36 cursor-pointer">
      <img
        src={controllerMobile}
        alt=""
        className="w-full lg:hidden"
      />
      <img
        src={controller}
        alt=""
        className="w-full hidden lg:inline"
      />
      <div className="relative lg:absolute 2xl:max-w-[460px] xl:max-w-sm lg:max-w-xs space-y-4 2xl:translate-x-[25rem] xl:translate-x-[21rem] lg:translate-x-80 bg-white py-12 lg:pl-0 lg:pr-0 ml-2 lg:ml-0">
        <p className="2xl:text-4xl xl:text-3xl lg:text-3xl font-medium text-2xl">
          Save $10 on select wireless controllers
        </p>
        <p className="sm:max-w-4xl">
          Upgrade their game with Xbox Wireless Controllers, designed for
          comfort, precision, and seamless sharing. Available in a variety of
          colors. Offer ends 12/31.
        </p>
        <button className="text-white bg-black font-medium py-[0.4rem] px-[0.8rem] translate-y-1 rounded-sm">
          Shop Xbox controllers
        </button>
      </div>
    </div>
  );
}

export default ControllerSection;
