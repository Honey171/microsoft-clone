import React, { useEffect } from 'react';
import {
  productOne,
  productTwo,
  productThree,
  productFour,
} from '../constants/imageLinks';
import { AiOutlineRight } from 'react-icons/ai';

function ProductSection() {
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
    <div className="mt-20 flex flex-col items-center md:items-baseline md:flex-row md:flex-wrap  justify-center gap-6">
      <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
        <img
          src={productOne}
          alt=""
        />
        <p className="text-3xl font-medium">$60 off Xbox Series S</p>
        <p>
          Score savings on the smallest, sleekest Xbox yet. Only $239.99, while
          supplies last. Offer ends 12/31.
        </p>
        <span className="pt-2 flex items-center gap-1 text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
          <p>Shop Xbox Series S</p>
          <AiOutlineRight />
        </span>
      </div>
      <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
        <img
          src={productTwo}
          alt=""
        />
        <p className="text-3xl font-medium">
          Select Surface Go 3, up to $70 off
        </p>
        <p>
          Share endless wonder, wherever you are, with the most portable Surface
          touchscreen 2-in-1—perfect for work, play, and beyond. Offer ends 1/8.
        </p>
        <span className="pt-2 flex items-center gap-1 text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
          <p>Shop Surface Go 3</p>
          <AiOutlineRight />
        </span>
      </div>
      <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
        <img
          src={productThree}
          alt=""
        />
        <p className="text-3xl font-medium">Xbox Series X</p>
        <p>
          Give thrills that'll last all year with the fastest, most powerful
          Xbox ever. Available now.
        </p>
        <span className="pt-2 flex gap-1 items-center text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
          <p>Shop Xbox Series X</p>
          <AiOutlineRight />
        </span>
      </div>
      <div className="max-w-sm flex flex-col gap-3 cursor-pointer">
        <img
          src={productFour}
          alt=""
        />
        <button className="self-start bg-[#950C17] font-medium text-white px-3 py-0.5">
          New
        </button>
        <p className="text-3xl font-medium">Surface Laptop 5</p>
        <p>
          Sophisticated style and multitasking speed powered by 12th Gen Intel®
          Core™ i5/i7 processors built on the Intel® Evo™ platform make this the
          perfect gift.
        </p>
        <span className="pt-2 flex gap-1 items-center text-[#950C17] font-medium hover:underline cursor-pointer animationItem">
          <p>Shop now</p>
          <AiOutlineRight />
        </span>
      </div>
    </div>
  );
}

export default ProductSection;
