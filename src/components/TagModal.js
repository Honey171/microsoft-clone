import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

function TagModal({ showModal }) {
  return (
    <>
      {showModal && (
        <div className="flex flex-col absolute 2xl:right-72 xl:right-20 right-10 bg-white border-b border-black z-20">
          <div className="flex flex-wrap flex-row gap-12 px-7 py-5">
            <ul className="flex flex-col space-y-6 text-sm">
              <span className="pb-4 text-black font-semibold">Software</span>
              <li className="hover:underline cursor-pointer">Windows Apps</li>
              <li className="hover:underline cursor-pointer">OneDrive</li>
              <li className="hover:underline cursor-pointer">Outlook</li>
              <li className="hover:underline cursor-pointer">Skype</li>
              <li className="hover:underline cursor-pointer">OneNote</li>
              <li className="hover:underline cursor-pointer">
                Microsoft Teams
              </li>
              <li className="hover:underline cursor-pointer">Microsoft Edge</li>
            </ul>
            <ul className="flex flex-col space-y-6 text-sm">
              <span className="pb-4 text-black font-semibold">
                PCs & Devices
              </span>
              <li className="hover:underline cursor-pointer">Computers</li>
              <li className="hover:underline cursor-pointer">Shop Xbox</li>
              <li className="hover:underline cursor-pointer">Accessories</li>
              <li className="hover:underline cursor-pointer">
                VR & mixed reality
              </li>
              <li className="hover:underline cursor-pointer">Phones</li>
            </ul>
            <ul className="flex flex-col space-y-6 text-sm">
              <span className="pb-4 text-black font-semibold">
                Entertainment
              </span>
              <li className="hover:underline cursor-pointer">
                Xbox Game Pass Ultimate
              </li>
              <li className="hover:underline cursor-pointer">PC Game Pass</li>
              <li className="hover:underline cursor-pointer">Xbox games</li>
              <li className="hover:underline cursor-pointer">PC games</li>
              <li className="hover:underline cursor-pointer">
                Windows digital games
              </li>
              <li className="hover:underline cursor-pointer">Movies & TV</li>
            </ul>
            <ul className="flex flex-col space-y-6 text-sm">
              <span className="pb-4 text-black font-semibold">Business</span>
              <li className="hover:underline cursor-pointer">
                Microsoft Cloud
              </li>
              <li className="hover:underline cursor-pointer">
                Microsoft Cloud
              </li>
              <li className="hover:underline cursor-pointer">Dynamics 365</li>
              <li className="hover:underline cursor-pointer">
                Microsoft 365 for business
              </li>
              <li className="hover:underline cursor-pointer">
                Microsoft Power Platform
              </li>
              <li className="hover:underline cursor-pointer">Windows 365</li>
              <li className="hover:underline cursor-pointer">
                Microsoft industry
              </li>
              <li className="hover:underline cursor-pointer">Small Business</li>
            </ul>
            <ul className="flex flex-col space-y-6 text-sm">
              <span className="pb-4 text-black font-semibold">
                Developer & IT
              </span>
              <li className="hover:underline cursor-pointer">Azure</li>
              <li className="hover:underline cursor-pointer">
                Developer Center
              </li>
              <li className="hover:underline cursor-pointer">Documentation</li>
              <li className="hover:underline cursor-pointer">
                Microsoft Learn
              </li>
              <li className="hover:underline cursor-pointer">
                Microsoft Tech Community
              </li>
              <li className="hover:underline cursor-pointer">
                Azure Marketplace
              </li>
              <li className="hover:underline cursor-pointer">AppSource</li>
              <li className="hover:underline cursor-pointer">Visual Studio</li>
            </ul>
            <ul className="flex flex-col space-y-6 text-sm justify-start">
              <span className="pb-4 text-black font-semibold">Other</span>
              <li className="hover:underline cursor-pointer">
                Microsoft Rewards
              </li>
              <li className="hover:underline cursor-pointer">
                Free downloads & security
              </li>
              <li className="hover:underline cursor-pointer">Education</li>
              <li className="hover:underline cursor-pointer">
                Virtual workshops and training
              </li>
              <li className="hover:underline cursor-pointer">Gift cards</li>
              <li className="hover:underline cursor-pointer">Holiday gifts</li>
              <li className="hover:underline cursor-pointer">Licensing</li>
              <li className="hover:underline cursor-pointer">
                Microsoft Experience Center
              </li>
            </ul>
          </div>
          <span className="mt-10 py-2 bg-[#E6E6E6] flex items-center justify-center">
            <p className="opacity-80 text-xs tracking-wider hover:underline cursor-pointer">
              VIEW SITEMAP
            </p>
            <AiOutlineRight className="h-[1rem] w-[1rem] opacity-50" />
          </span>
        </div>
      )}
    </>
  );
}

export default TagModal;
