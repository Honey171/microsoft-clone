import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc';
import {
  bigCarouselImageOne,
  bigCarouselImageTwo,
} from '../constants/imageLinks';

function BigCarousel({ menu }) {
  const ref = useRef(null);
  const [carouselWrapper, setCarouselWrapper] = useState();
  const [currentPos, setCurrentPos] = useState(0);

  useEffect(() => {
    const carousel = ref.current;
    setCarouselWrapper(carousel);
    carousel.scrollLeft = currentPos * carousel.clientWidth;
  }, [currentPos]);

  const nextItem = () => {
    setCurrentPos(
      (currentPos) => (currentPos + 1) % carouselWrapper.childNodes.length,
    );
  };

  const prevItem = () => {
    setCurrentPos(
      (currentPos) =>
        (currentPos - 1 + carouselWrapper.childNodes.length) %
        carouselWrapper.childNodes.length,
    );
  };

  const animationHandlerOne = (e) => {
    if (
      e.target.classList.contains('rightArrowBoxThree') ||
      e.target.classList.contains('rightArrowThree')
    ) {
      document
        .querySelector('.rightArrowThree')
        .classList.add('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrowThree')
        .classList.remove('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBoxThree') ||
      e.target.classList.contains('leftArrowThree')
    ) {
      document
        .querySelector('.leftArrowThree')
        .classList.add('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrowThree')
        .classList.remove('carouselArrowAnimationRight');
    }
  };

  const animationHandlerTwo = (e) => {
    if (
      e.target.classList.contains('rightArrowBoxThree') ||
      e.target.classList.contains('rightArrowThree')
    ) {
      document
        .querySelector('.rightArrowThree')
        .classList.remove('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrowThree')
        .classList.add('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBoxThree') ||
      e.target.classList.contains('leftArrowThree')
    ) {
      document
        .querySelector('.leftArrowThree')
        .classList.remove('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrowThree')
        .classList.add('carouselArrowAnimationRight');
    }
  };

  return (
    <>
      {!menu && (
        <div className="flex flex-col items-center">
          <div
            className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
            ref={ref}
          >
            <div className="min-w-full flex flex-col items-center justify-evenly cursor-pointer -translate-y-8">
              <img
                src={bigCarouselImageOne}
                alt=""
                className="item w-[90%] md:w-[80%]"
              />
              <div className="space-y-3 max-w-md sm:max-w-xl md:max-w-3xl">
                <p className="pl-3 text-[#A6333C] font-medium">New</p>
                <p className="text-4xl font-medium">Surface Pro 9</p>
                <p className=" pt-2 pb-2">
                  Keep spirits bright with a game-changing combo of laptop power
                  and tablet flexibility—all in one ultra-portable device
                </p>
                <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
                  Shop now
                </button>
              </div>
            </div>
            <div className="min-w-full flex flex-col items-center justify-evenly cursor-pointer -translate-y-8">
              <img
                src={bigCarouselImageTwo}
                alt=""
                className="item w-[90%] md:w-[80%]"
              />
              <div className="space-y-3 max-w-md sm:max-w-xl md:max-w-3xl">
                <p className="text-4xl font-medium">PC Game Pass</p>
                <p className="pt-2 pb-2">
                  Unwrap 100+ great games and EA Play, plus get your first month
                  for $1. Offer available to new subscribers only.
                </p>
                <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
                  Join Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-9">
            <div
              className="cursor-pointer leftArrowBoxThree"
              onMouseEnter={animationHandlerOne}
              onMouseLeave={animationHandlerTwo}
              onClick={prevItem}
            >
              <AiOutlineLeft className="text-3xl cursor-pointer leftArrowThree" />
            </div>
            <div className="flex space-x-3 text-lg">
              {currentPos === 0 ? <VscCircleFilled /> : <VscCircleOutline />}
              {currentPos === 1 ? <VscCircleFilled /> : <VscCircleOutline />}
            </div>
            <div
              className="cursor-pointer rightArrowBoxThree"
              onMouseEnter={animationHandlerOne}
              onMouseLeave={animationHandlerTwo}
              onClick={nextItem}
            >
              <AiOutlineRight className="text-3xl cursor-pointer rightArrowThree" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BigCarousel;
