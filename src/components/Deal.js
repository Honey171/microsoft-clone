import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

function Deal({ menu }) {
  const animationHandlerRight = () => {
    document.querySelector('.arrow').classList.add('dealAnimationRight');
    document.querySelector('.arrow').classList.remove('dealAnimationLeft');
  };

  const animationHandlerLeft = () => {
    document.querySelector('.arrow').classList.remove('dealAnimationRight');
    document.querySelector('.arrow').classList.add('dealAnimationLeft');
  };

  return (
    <>
      {!menu && (
        <div className="py-[1.1rem] bg-[#950C17] flex justify-center">
          <div
            className="px-5 text-white font-medium flex items-center hover:underline cursor-pointer md:space-x-1"
            onMouseOver={animationHandlerRight}
            onMouseOut={animationHandlerLeft}
          >
            <span className="text-center">
              Grab hot deals on hundreds of digital games, Surface devices,
              Xbox, and more. Shop Countdown Sale
            </span>
            <AiOutlineRight className="w-[3.2rem] h-[1.2rem] sm:w-[1.1rem] arrow" />
          </div>
        </div>
      )}
    </>
  );
}

export default Deal;
