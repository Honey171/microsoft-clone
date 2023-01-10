import React, { useState, useRef, useEffect } from 'react';
import { VscSearch } from 'react-icons/vsc';
import {
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsArrowLeft } from 'react-icons/bs';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function MobileNavbar({ menu, setMenu }) {
  const [mobileSearch, setMobileSearch] = useState(false);
  const [software, setSoftware] = useState(false);
  const [devices, setDevices] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [business, setBusiness] = useState(false);
  const [developer, setDeveloper] = useState(false);
  const [other, setOther] = useState(false);
  const ref = useRef(null);

  const softwareMenuHandler = () => {
    setSoftware(!software);
  };

  const devicesMenuHandler = () => {
    setDevices(!devices);
  };

  const entertainmentMenuHandler = () => {
    setEntertainment(!entertainment);
  };

  const businessMenuHandler = () => {
    setBusiness(!business);
  };

  const developerMenuHandler = () => {
    setDeveloper(!developer);
  };

  const otherMenuHandler = () => {
    setOther(!other);
  };

  const mobileSearchHandler = () => {
    setMobileSearch(!mobileSearch);
    if (menu) {
      setMenu(false);
    }
  };

  const menuHandler = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (menu) {
      const el = ref.current;
      el.childNodes[0].classList.add('firstClicked');
      el.childNodes.forEach((child) => {
        child.addEventListener('click', (e) => {
          const prev = document.querySelector('.clicked');
          if (prev) {
            prev.classList.remove('clicked');
          }
          if (e.target !== 'li') {
            el.childNodes[0]?.classList.remove('firstClicked');
            e.target.classList.add('clicked');
          }
        });
      });
    }
  }, [menu]);

  return (
    <>
      {!mobileSearch && (
        <div className="flex justify-between items-center px-5 py-3">
          <div className="flex items-center space-x-6">
            {menu ? (
              <AiOutlineClose
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                onClick={menuHandler}
              />
            ) : (
              <RxHamburgerMenu
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                onClick={menuHandler}
              />
            )}
            <VscSearch
              className="w-[1.1rem] h-[1.1rem] cursor-pointer"
              onClick={mobileSearchHandler}
            />
          </div>
          <div>
            <img
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
              alt="logo"
              className="w-[6.75rem] h-[1.5rem] cursor-pointer"
            />
          </div>
          <div className="flex items-center space-x-6">
            <AiOutlineShoppingCart className="w-[1.5rem] h-[1.2rem] cursor-pointer" />
            <AiOutlineUser className="w-[1.7rem] h-[1.7rem] border border-black rounded-full border-solid cursor-pointer" />
          </div>
        </div>
      )}
      {mobileSearch && (
        <div className="flex items-center space-x-5 py-2">
          <BsArrowLeft
            className="text-xl ml-3 cursor-pointer"
            onClick={mobileSearchHandler}
          />
          <VscSearch className="w-[1rem] h-[1.1rem] absolute left-10  " />
          <input
            type="text"
            className="w-[88%] h-[2.2rem] border-2 border-[#0067B8] text-[0.8rem] outline-none pl-7"
            placeholder="Search Microsoft.com"
          />
        </div>
      )}

      {menu && (
        <ul
          className="menuList border-b border-black text-[.95rem]"
          ref={ref}
        >
          <li className="h-[3.3rem] border items-center flex pl-5 listItem cursor-pointer">
            Microsoft 365
          </li>
          <li className="h-[3.3rem]  border border-opacity-0  items-center flex pl-5 listItem cursor-pointer">
            Teams
          </li>
          <li className="h-[3.3rem]  border border-opacity-0 items-center flex pl-5 listItem cursor-pointer">
            Windows
          </li>
          <li className="h-[3.3rem]  border border-opacity-0  items-center flex pl-5 listItem cursor-pointer">
            Surface
          </li>
          <li className="h-[3.3rem]  border border-opacity-0 items-center flex pl-5 listItem cursor-pointer">
            Xbox
          </li>
          <li className="h-[3.3rem] border border-opacity-0 items-center flex pl-5 listItem cursor-pointer">
            Deals
          </li>
          <li className="h-[3.3rem] border border-opacity-0 items-center flex pl-5 listItem cursor-pointer">
            Small Business
          </li>
          <li className="h-[3.3rem]  border border-opacity-0 items-center flex pl-5 listItem cursor-pointer">
            Support
          </li>
          <li
            className="h-[3.3rem]  border border-opacity-0 items-center flex pl-5 listItem justify-between cursor-pointer"
            onClick={softwareMenuHandler}
          >
            Software
            <span className="pr-7 pointer-events-none text-sm">
              {software ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </li>
          {software && (
            <ul className="my-7 space-y-8 text-[0.95rem] !border-none pl-[3rem]">
              <li className="!border-none cursor-pointer">Windows Apps</li>
              <li className="!border-none cursor-pointer">OneDrive</li>
              <li className="!border-none cursor-pointer">Outlook</li>
              <li className="!border-none cursor-pointer">Skype</li>
              <li className="!border-none cursor-pointer">OneNote</li>
              <li className="!border-none cursor-pointer">Microsoft Teams</li>
              <li className="!border-none cursor-pointer">Microsoft Edge</li>
            </ul>
          )}
          <li
            className="h-[3.3rem] border border-opacity-0 items-center flex pl-5 listItem justify-between cursor-pointer"
            onClick={devicesMenuHandler}
          >
            PCs & Devices
            <span className="pr-7 pointer-events-none text-sm">
              {devices ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </li>
          {devices && (
            <ul className="my-7 space-y-8 text-[0.95rem] !border-none pl-[3rem]">
              <li className="!border-none cursor-pointer">Computers</li>
              <li className="!border-none cursor-pointer">Shop Xbox</li>
              <li className="!border-none cursor-pointer">Accessories</li>
              <li className="!border-none cursor-pointer">
                VR & mixed reality
              </li>
              <li className="!border-none cursor-pointer">Phones</li>
            </ul>
          )}
          <li
            className="h-[3.3rem]  border border-opacity-0 items-center flex pl-5 listItem justify-between"
            onClick={entertainmentMenuHandler}
          >
            Entertainment
            <span className="pr-7 pointer-events-none text-sm">
              {entertainment ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </li>
          {entertainment && (
            <ul className="my-7 space-y-8 text-[0.95rem] !border-none pl-[3rem]">
              <li className="!border-none cursor-pointer">
                Xbox Game Pass Ultimate
              </li>
              <li className="!border-none cursor-pointer">PC Game Pass</li>
              <li className="!border-none cursor-pointer">Xbox games</li>
              <li className="!border-none cursor-pointer">PC games</li>
              <li className="!border-none cursor-pointer">
                Windows digital games
              </li>
              <li className="!border-none cursor-pointer">Movies & TV</li>
            </ul>
          )}
          <li
            className="h-[3.3rem] border border-opacity-0  items-center flex pl-5 listItem justify-between cursor-pointer"
            onClick={businessMenuHandler}
          >
            Business
            <span className="pr-7 pointer-events-none text-sm">
              {business ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </li>
          {business && (
            <ul className="my-7 space-y-8 text-[0.95rem] !border-none pl-[3rem]">
              <li className="!border-none cursor-pointer">Microsoft Cloud</li>
              <li className="!border-none cursor-pointer">Microsoft Cloud</li>
              <li className="!border-none cursor-pointer">Dynamics 365</li>
              <li className="!border-none cursor-pointer">
                Microsoft 365 for business
              </li>
              <li className="!border-none cursor-pointer">
                Microsoft Power Platform
              </li>
              <li className="!border-none cursor-pointer">Windows 365</li>
              <li className="!border-none cursor-pointer">
                Microsoft industry
              </li>
              <li className="!border-none cursor-pointer">Small Business</li>
            </ul>
          )}
          <li
            className="h-[3.3rem] border border-opacity-0 items-center flex pl-5 listItem justify-between cursor-pointer"
            onClick={developerMenuHandler}
          >
            Developer & IT
            <span className="pr-7 pointer-events-none text-sm">
              {developer ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </li>
          {developer && (
            <ul className="my-7 space-y-8 text-[0.95rem] !border-none pl-[3rem]">
              <li className="!border-none cursor-pointer">Azure</li>
              <li className="!border-none cursor-pointer">Developer Center</li>
              <li className="!border-none cursor-pointer">Documentation</li>
              <li className="!border-none cursor-pointer">Microsoft Learn</li>
              <li className="!border-none cursor-pointer">
                Microsoft Tech Community
              </li>
              <li className="!border-none cursor-pointer">Azure Marketplace</li>
              <li className="!border-none cursor-pointer">AppSource</li>
              <li className="!border-none cursor-pointer">Visual Studio</li>
            </ul>
          )}
          <li
            className="h-[3.3rem] border border-opacity-0  items-center flex pl-5 listItem justify-between cursor-pointer"
            onClick={otherMenuHandler}
          >
            Other
            <span className="pr-7 pointer-events-none text-sm">
              {other ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </li>
          {other && (
            <ul className="my-7 space-y-8 text-[0.95rem] !border-none pl-[3rem]">
              <li className="!border-none cursor-pointer">Microsoft Rewards</li>
              <li className="!border-none cursor-pointer">
                Free downloads & security
              </li>
              <li className="!border-none cursor-pointer">Education</li>
              <li className="!border-none cursor-pointer">
                Virtual workshops and training
              </li>
              <li className="!border-none cursor-pointer">Gift cards</li>
              <li className="!border-none cursor-pointer">Holiday gifts</li>
              <li className="!border-none cursor-pointer">Licensing</li>
              <li className="!border-none cursor-pointer">
                Microsoft Experience Center
              </li>
            </ul>
          )}
          <li className="h-[3.3rem] border items-center flex pl-5 listItem">
            View Sitemap
          </li>
        </ul>
      )}
    </>
  );
}

export default MobileNavbar;
