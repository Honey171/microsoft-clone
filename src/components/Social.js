import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function Social() {
  return (
    <div className="2xl:pl-36 xl:pl-28 lg:pl-24 md:pl-12 pl-8 mt-16">
      <div className="flex items-center">
        <p>Follow microsoft</p>
        <div className="flex space-x-6 pl-6 text-[#231F20] text-2xl">
          <FaFacebookF className="cursor-pointer" />
          <AiOutlineTwitter className="cursor-pointer" />
          <BsLinkedin className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Social;
