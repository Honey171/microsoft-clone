import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { VscCircleFilled, VscCircleOutline } from 'react-icons/vsc';
import {
  bigCarouselImageOne,
  bigCarouselImageTwo,
} from '../constants/imageLinks';

function BigCarousel({ menu, setShowModal, setMoreModal }) {
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
    setShowModal(false);
    setMoreModal(false);
  };

  const prevItem = () => {
    setCurrentPos(
      (currentPos) =>
        (currentPos - 1 + carouselWrapper.childNodes.length) %
        carouselWrapper.childNodes.length,
    );
    setShowModal(false);
    setMoreModal(false);
  };

  const animationHandlerOne = (e) => {
    if (
      e.target.classList.contains('rightArrowBox') ||
      e.target.classList.contains('rightArrow')
    ) {
      document
        .querySelector('.rightArrow')
        .classList.add('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrow')
        .classList.remove('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBox') ||
      e.target.classList.contains('leftArrow')
    ) {
      document
        .querySelector('.leftArrow')
        .classList.add('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrow')
        .classList.remove('carouselArrowAnimationRight');
    }
  };

  const animationHandlerTwo = (e) => {
    if (
      e.target.classList.contains('rightArrowBox') ||
      e.target.classList.contains('rightArrow')
    ) {
      document
        .querySelector('.rightArrow')
        .classList.remove('carouselArrowAnimationRight');
      document
        .querySelector('.rightArrow')
        .classList.add('carouselArrowAnimationLeft');
    }

    if (
      e.target.classList.contains('leftArrowBox') ||
      e.target.classList.contains('leftArrow')
    ) {
      document
        .querySelector('.leftArrow')
        .classList.remove('carouselArrowAnimationLeft');
      document
        .querySelector('.leftArrow')
        .classList.add('carouselArrowAnimationRight');
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <div
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
        ref={ref}
      >
        <div className="min-w-full flex items-center justify-evenly cursor-pointer">
          <div className="space-y-3">
            <p className="pl-3 text-[#A6333C] font-medium">New</p>
            <p className="text-4xl font-medium">Surface Pro 9</p>
            <p className="2xl:max-w-xl max-w-sm pt-2 pb-2">
              Keep spirits bright with a game-changing combo of laptop power and
              tablet flexibility—all in one ultra-portable device
            </p>
            <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
              Shop now
            </button>
          </div>
          <img
            src={bigCarouselImageOne}
            alt=""
            className="item w-[60%] 2xl:w-[43%]"
          />
        </div>
        <div className="min-w-full flex items-center justify-evenly cursor-pointer">
          <div className="space-y-3">
            <p className="text-4xl font-medium">PC Game Pass</p>
            <p className="2xl:max-w-xl max-w-sm pt-2 pb-2">
              Unwrap 100+ great games and EA Play, plus get your first month for
              $1. Offer available to new subscribers only.
            </p>
            <button className="py-2 px-3 bg-black text-white font-medium rounded-sm">
              Join Now
            </button>
          </div>
          <img
            src={bigCarouselImageTwo}
            alt=""
            className="item w-[60%] 2xl:w-[43%]"
          />
        </div>
      </div>
      <div className="flex items-center space-x-9">
        <div
          className="cursor-pointer leftArrowBox"
          onMouseEnter={animationHandlerOne}
          onMouseLeave={animationHandlerTwo}
          onClick={prevItem}
        >
          <AiOutlineLeft className="text-3xl cursor-pointer leftArrow" />
        </div>
        <div className="flex space-x-3 text-lg">
          {currentPos === 0 ? <VscCircleFilled /> : <VscCircleOutline />}
          {currentPos === 1 ? <VscCircleFilled /> : <VscCircleOutline />}
        </div>
        <div
          className="cursor-pointer rightArrowBox"
          onMouseEnter={animationHandlerOne}
          onMouseLeave={animationHandlerTwo}
          onClick={nextItem}
        >
          <AiOutlineRight className="text-3xl cursor-pointer rightArrow" />
        </div>
      </div>
    </div>
  );
}

export default BigCarousel;
