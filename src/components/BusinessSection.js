import React, { useEffect } from 'react';
import {
  businessOne,
  businessTwo,
  businessThree,
  businessFour,
} from '../constants/imageLinks';
import { AiOutlineRight } from 'react-icons/ai';

function BusinessSection() {
  useEffect(() => {
    const items = document.querySelectorAll('.animationItem');
    items.forEach((item) => {
      item.addEventListener('mouseover', () => {
        item.children[1].classList.add('productArrowAnimationRight');
        item.children[1].classList.remove('productArrowAnimationLeft');
      });
      item.addEventListener('mouseout', () => {
        item.children[1].classList.remove('productArrowAnimationRight');
        item.children[1].classList.add('productArrowAnimationLeft');
      });
    });
  }, []);

  return (
    <>
      <div className="mt-36 flex flex-col items-center md:items-baseline md:flex-row md:flex-wrap  justify-center gap-6">
        <div className="max-w-sm flex flex-col cursor-pointer gap-2 self-center -translate-y-[2.7rem]">
          <p className="-translate-y-4 text-3xl font-medium">For business</p>
          <img
            src={businessOne}
            alt=""
          />
          <button className="self-start bg-[#950C17] font-medium text-white px-3 py-0.5">
            New
          </button>
          <p className="text-[1.8rem] font-medium">
            Surface Pro 9 for Business
          </p>
          <p>
            Empower flexible, all-day impact with tablet portability and laptop
            performance. Questions? Book an online consultation.
          </p>
          <div className="flex items-center pt-2">
            <span className="flex items-center gap-1 text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
              <p>Shop now</p>
              <AiOutlineRight />
            </span>
            <span className=" flex items-center gap-1 text-[#950C17] font-medium hover:underline cursor-pointer ml-5 animationItem">
              <p>Book a consultation</p>
              <AiOutlineRight />
            </span>
          </div>
        </div>
        <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
          <img
            src={businessTwo}
            alt=""
          />
          <p className="text-[1.8rem] font-medium pt-7">
            Get Microsoft Teams for free
          </p>
          <p>
            Online meetings, chat, and shared cloud storage—all in one place.
          </p>
          <span className="pt-2 flex items-center gap-1 text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
            <p>Sign up for free</p>
            <AiOutlineRight />
          </span>
        </div>
        <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
          <img
            src={businessThree}
            alt=""
          />
          <p className="text-[1.8rem] font-medium pt-7">
            Welcome to your Windows 365 Cloud PC
          </p>
          <p>
            Securely stream your Windows experience from the Microsoft cloud to
            any device.
          </p>
          <span className="pt-2 flex gap-1 items-center text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
            <p>Get it today</p>
            <AiOutlineRight />
          </span>
        </div>
        <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
          <img
            src={businessFour}
            alt=""
          />
          <p className="text-[1.8rem] font-medium pt-7">
            Thrive in a hybrid world
          </p>
          <p>
            Discover tools, resources, and strategies to help your employees
            succeed in the new world of flexible work.
          </p>
          <span className="pt-2 flex gap-1 items-center text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
            <p>Learn more</p>
            <AiOutlineRight />
          </span>
        </div>
      </div>
    </>
  );
}

export default BusinessSection;
