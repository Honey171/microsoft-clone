import React, { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import BigCarousel from '../components/BigCarousel';
import BigCarouselSmaller from '../components/BigCarouselSmaller';
import BigCarouselTwo from '../components/BigCarouselTwo';
import BigCarouselTwoSmaller from '../components/BigCarouselTwoSmaller';
import BusinessSection from '../components/BusinessSection';
import ChooseSection from '../components/ChooseSection';
import ControllerSection from '../components/ControllerSection';
import Deal from '../components/Deal';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';
import Navbar from '../components/Navbar';
import ProductSection from '../components/ProductSection';
import Social from '../components/Social';
import TagModal from '../components/TagModal';

function Home() {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [moreModal, setMoreModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrolledY = window.scrollY;
      if (scrolledY >= 1100) {
        setIsScrolled(scrolledY);
      }
    });
  }, [isScrolled]);

  return (
    <>
      <div className="w-full min-h-full">
        <div className="hidden lg:inline">
          <Navbar
            showModal={showModal}
            setShowModal={setShowModal}
            moreModal={moreModal}
            setMoreModal={setMoreModal}
          />
          <TagModal showModal={showModal} />
        </div>
        <div className="inline lg:hidden">
          <MobileNavbar
            menu={menu}
            setMenu={setMenu}
          />
        </div>
        <Deal menu={menu} />
        <div className="hidden lg:inline">
          <BigCarousel
            menu={menu}
            setShowModal={setShowModal}
            setMoreModal={setMoreModal}
          />
        </div>
        <div className="inline lg:hidden">
          <BigCarouselSmaller menu={menu} />
        </div>
        <ChooseSection />
        <ProductSection />
        {isScrolled >= 1200 && (
          <button
            className={`fixed bottom-20 right-0 z-50 hidden lg:flex items-center space-x-2 bg-gray-300 hover:bg-white py-2 px-3 rounded-sm font-medium`}
            onClick={() => {
              document.documentElement.scrollTop = 0;
              setIsScrolled(0);
            }}
          >
            <AiOutlineArrowUp className="text-xl" />
            <span>Back to top</span>
          </button>
        )}
        <ControllerSection />
        <BusinessSection />
        <div className="hidden lg:inline">
          <BigCarouselTwo />
        </div>
        <div className="inline lg:hidden">
          <BigCarouselTwoSmaller />
        </div>
        <Social />
        <div className="flex flex-col lg:flex-row items-center justify-center mt-16 space-y-2 lg:space-y-0">
          <p className="font-bold">This clone made for educational purpose</p>
          <button
            className={`flex items-center space-x-2 bg-gray-300 hover:bg-white py-2 px-3 rounded-sm font-medium lg:hidden`}
            onClick={() => {
              document.documentElement.scrollTop = 0;
              setIsScrolled(0);
            }}
          >
            <AiOutlineArrowUp className="text-xl" />
            <span>Back to top</span>
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
