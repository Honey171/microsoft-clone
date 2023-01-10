import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc';
import {
  bigCarouselTwoImageOne,
  bigCarouselTwoImageTwo,
} from '../constants/imageLinks';

function BigCarouselTwo() {
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
      e.target.classList.contains('rightArrowBoxTwo') ||
      e.target.classList.contains('rightArrowTwo')
    ) {
      document
        .querySelector('.rightArrowTwo')
        .classList.add('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrowTwo')
        .classList.remove('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBoxTwo') ||
      e.target.classList.contains('leftArrowTwo')
    ) {
      document
        .querySelector('.leftArrowTwo')
        .classList.add('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrowTwo')
        .classList.remove('carouselArrowAnimationRight');
    }
  };

  const animationHandlerTwo = (e) => {
    if (
      e.target.classList.contains('rightArrowBoxTwo') ||
      e.target.classList.contains('rightArrowTwo')
    ) {
      document
        .querySelector('.rightArrowTwo')
        .classList.remove('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrowTwo')
        .classList.add('carouselArrowAnimationLeft');
    }
    if (
      e.target.classList.contains('leftArrowBoxTwo') ||
      e.target.classList.contains('leftArrowTwo')
    ) {
      document
        .querySelector('.leftArrowTwo')
        .classList.remove('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrowTwo')
        .classList.add('carouselArrowAnimationRight');
    }
  };

  return (
    <div className="flex flex-col items-center test">
      <div
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide mt-10"
        ref={ref}
      >
        <div className="min-w-full flex items-center justify-evenly cursor-pointer">
          {currentPos === 0 ? (
            <div
              className={`space-y-3 absolute left-44 xl:left-56 2xl:left-64  ${
                currentPos === 0 ? '' : 'hidden'
              } text-white`}
            >
              <p className="text-3xl font-medium max-w-[12rem] 2xl:max-w-[22rem] 2xl:text-4xl">
                Gaining more every down
              </p>
              <p className="pt-2 pb-2 max-w-[12rem] xl:max-w-[18.9rem] 2xl:max-w-[24rem]">
                Microsoft and the NFL are always striving to power a better
                game, from preseason to playoffs
              </p>
              <button className="py-2 px-3 bg-white text-black font-medium rounded-sm hover:bg-white/90">
                Read the story
              </button>
            </div>
          ) : (
            <div
              className={`space-y-3 absolute left-40 xl:left-56 2xl:left-64  ${
                currentPos === 1 ? '' : 'hidden'
              } text-white`}
            >
              <p className="text-3xl font-medium max-w-[12rem] 2xl:max-w-[22rem] 2xl:text-4xl">
                Empowering the next generation
              </p>
              <p className="pt-2 pb-2 max-w-[14rem] xl:max-w-[18.9rem] 2xl:max-w-[24rem]">
                Together with NBA player Donovan Mitchell, we outfitted the
                Children’s Village in Dobbs Ferry, NY with a tech lab and an
                entire STEM curriculum
              </p>
              <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
                Learn about the partnership
              </button>
            </div>
          )}
          <img
            src={bigCarouselTwoImageOne}
            alt=""
            className="item w-[85%]"
          />
        </div>
        <div className="min-w-full flex items-center justify-center cursor-pointer">
          <img
            src={bigCarouselTwoImageTwo}
            alt=""
            className="item w-[85%]"
          />
        </div>
      </div>
      <div className="flex items-center space-x-9 mt-8">
        <div
          className="cursor-pointer leftArrowBoxTwo"
          onMouseEnter={animationHandlerOne}
          onMouseLeave={animationHandlerTwo}
          onClick={prevItem}
        >
          <AiOutlineLeft className="text-3xl cursor-pointer leftArrowTwo" />
        </div>
        <div className="flex space-x-3 text-lg">
          {currentPos === 0 ? <VscCircleFilled /> : <VscCircleOutline />}
          {currentPos === 1 ? <VscCircleFilled /> : <VscCircleOutline />}
        </div>
        <div
          className="cursor-pointer rightArrowBoxTwo"
          onMouseEnter={animationHandlerOne}
          onMouseLeave={animationHandlerTwo}
          onClick={nextItem}
        >
          <AiOutlineRight className="text-3xl cursor-pointer rightArrowTwo" />
        </div>
      </div>
    </div>
  );
}

export default BigCarouselTwo;
