import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc';
import {
  bigCarouselTwoImageOneSmaller,
  bigCarouselTwoImageTwoSmaller,
} from '../constants/imageLinks';

function BigCarousel() {
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
      e.target.classList.contains('rightArrowBoxFour') ||
      e.target.classList.contains('rightArrowFour')
    ) {
      document
        .querySelector('.rightArrowFour')
        .classList.add('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrowFour')
        .classList.remove('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBoxFour') ||
      e.target.classList.contains('leftArrowFour')
    ) {
      document
        .querySelector('.leftArrowFour')
        .classList.add('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrowFour')
        .classList.remove('carouselArrowAnimationRight');
    }
  };

  const animationHandlerTwo = (e) => {
    if (
      e.target.classList.contains('rightArrowBoxFour') ||
      e.target.classList.contains('rightArrowFour')
    ) {
      document
        .querySelector('.rightArrowFour')
        .classList.remove('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrowFour')
        .classList.add('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBoxFour') ||
      e.target.classList.contains('leftArrowFour')
    ) {
      document
        .querySelector('.leftArrowFour')
        .classList.remove('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrowFour')
        .classList.add('carouselArrowAnimationRight');
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="flex overflow-x-scroll scroll-smooth scrollbar-hide mt-10"
          ref={ref}
        >
          <div className="min-w-full flex flex-col items-center justify-evenly cursor-pointer">
            <img
              src={bigCarouselTwoImageOneSmaller}
              alt=""
              className="item w-[95%] sm:w-[90%]"
            />
            <div className="space-y-3 max-w-sm sm:max-w-xl md:max-w-2xl">
              <p className="text-2xl font-medium">Gaining more every down</p>
              <p className="pt-2 pb-2">
                Microsoft and the NFL are always striving to power a better
                game, from preseason to playoffs
              </p>
              <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
                Read the story
              </button>
            </div>
          </div>
          <div className="min-w-full flex flex-col items-center justify-evenly cursor-pointer">
            <img
              src={bigCarouselTwoImageTwoSmaller}
              alt=""
              className="item w-[95%] sm:w-[90%]"
            />
            <div className="space-y-3 max-w-sm sm:max-w-lg md:max-w-2xl">
              <p className="text-2xl font-medium">
                Empowering the next generation
              </p>
              <p className="pt-2 pb-2">
                Together with NBA player Donovan Mitchell, we outfitted the
                Children’s Village in Dobbs Ferry, NY with a tech lab and an
                entire STEM curriculum
              </p>
              <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
                Learn about the partnership
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-9 mt-6">
          <div
            className="cursor-pointer leftArrowBoxFour"
            onMouseEnter={animationHandlerOne}
            onMouseLeave={animationHandlerTwo}
            onClick={prevItem}
          >
            <AiOutlineLeft className="text-3xl cursor-pointer leftArrowFour" />
          </div>
          <div className="flex space-x-3 text-lg">
            {currentPos === 0 ? <VscCircleFilled /> : <VscCircleOutline />}
            {currentPos === 1 ? <VscCircleFilled /> : <VscCircleOutline />}
          </div>
          <div
            className="cursor-pointer rightArrowBoxFour"
            onMouseEnter={animationHandlerOne}
            onMouseLeave={animationHandlerTwo}
            onClick={nextItem}
          >
            <AiOutlineRight className="text-3xl cursor-pointer rightArrowFour" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCarousel;
