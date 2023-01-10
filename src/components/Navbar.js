import React, { useState } from 'react';
import { VscSearch } from 'react-icons/vsc';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';

function Navbar({ showModal, setShowModal, moreModal, setMoreModal }) {
  const [search, setSearch] = useState(false);

  const searchHandler = () => {
    setSearch(!search);
    setMoreModal(false);
    setShowModal(false);
  };

  const showModalHandler = () => {
    if (moreModal) {
      setShowModal(true);
      setMoreModal(false);
    }
    if (!moreModal) {
      setShowModal(!showModal);
    }
  };

  const moreModalHandler = () => {
    if (showModal) {
      setShowModal(false);
      setMoreModal(true);
    }
    if (!showModal) {
      setMoreModal(!moreModal);
    }
  };

  return (
    <>
      <div
        className={`flex justify-between items-center ${
          search ? 'py-3' : ''
        } px-8 xl:px-16 2xl:px-40 w-full relative`}
      >
        <div className="flex items-center">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
            alt="logo"
            className="w-[6.75rem] h-[1.5rem] cursor-pointer"
          />
          {!search && (
            <ul className="flex items-center text-[0.8rem] pl-8 pt-1 space-x-7">
              <li className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Microsoft 365
              </li>
              <li className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Teams
              </li>
              <li className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Windows
              </li>
              <li className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Surface
              </li>
              <li className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Xbox
              </li>
              <li className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Deals
              </li>
              <li
                className={`flex items-center space-x-1 xl:hidden cursor-pointer ${
                  moreModal ? 'border-dashed border-black' : ''
                }  px-3 py-4 border border-b-0`}
                onClick={moreModalHandler}
              >
                <span className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2">
                  More
                </span>{' '}
                <IoIosArrowDown className="mt-1.5" />
                {moreModal && (
                  <div className="absolute top-14 -translate-x-[1.05rem] flex-col space-y-8 bg-white pl-5 pr-20 py-6 border-b-2 border-black">
                    <p className="hover:underline cursor-pointer">
                      Small business
                    </p>
                    <p className="hover:underline cursor-pointer">Support</p>
                  </div>
                )}
              </li>
              <li className="hidden xl:inline-flex hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Small Business
              </li>
              <li className="hidden xl:inline-flex hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 cursor-pointer">
                Support
              </li>
            </ul>
          )}
        </div>
        {search && (
          <div className="2xl:w-[90%] xl:w-[87%] lg:w-[86%] flex items-center translate-y-1.5 space-x-2">
            <input
              type="text"
              className="w-[90.5%] h-[2.2rem] border-2 border-[#0067B8] pl-2 text-[0.8rem] outline-none"
              placeholder="Search Microsoft.com"
            />
            <VscSearch className="w-[1rem] h-[1rem] absolute 2xl:right-[10.2%] right-[10.4%]" />
            <button
              className="border border-black h-[2.2rem] w-[4.6rem] text-sm"
              onClick={searchHandler}
            >
              Cancel
            </button>
          </div>
        )}

        {!search && (
          <ul className="flex items-center text-[0.8rem] space-x-4 xl:space-x-7 pt-1">
            <li
              className={`flex items-center space-x-1 ${
                showModal ? 'border-dashed border-black' : ''
              } py-4 px-2 border border-b-0 cursor-pointer`}
              onClick={showModalHandler}
            >
              <span className="hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 ">
                All microsoft
              </span>{' '}
              <IoIosArrowDown className="mt-1.5" />
            </li>
            <li
              className="flex items-center space-x-1 cursor-pointer"
              onClick={searchHandler}
            >
              <span className="xl:inline-flex hidden hover:underline underline-offset-4 decoration-solid decoration-black decoration-2 ">
                Search
              </span>{' '}
              <VscSearch className="w-[1rem] h-[1rem]" />
            </li>
            <li className="flex items-center space-x-1 xl:pl-1.5 cursor-pointer">
              <span className="xl:inline-flex hidden hover:underline underline-offset-4 decoration-solid decoration-black decoration-2">
                Cart
              </span>{' '}
              <AiOutlineShoppingCart className="w-[1.5rem] h-[1.2rem]" />
            </li>
            <li className="flex items-center space-x-1 cursor-pointer">
              <span className="pr-1.5">Taha</span>
              <AiOutlineUser className="w-[1.7rem] h-[1.7rem] border border-black rounded-full border-solid" />
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
