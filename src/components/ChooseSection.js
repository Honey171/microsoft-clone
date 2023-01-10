import React from 'react';
import {
  surface,
  windows,
  accessories,
  business,
  games,
} from '../constants/imageLinks';

function ChooseSection() {
  return (
    <div className="flex justify-center items-center gap-11 flex-wrap mt-14 px-10">
      <div className="flex flex-col items-center gap-1">
        <img
          src={surface}
          alt=""
        />
        <p className="font-medium underline cursor-pointer">
          Shop Surface devices
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img
          src={games}
          alt=""
        />
        <p className="font-medium underline cursor-pointer">
          Buy Xbox games and consoles
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img
          src={windows}
          alt=""
        />
        <p className="font-medium underline cursor-pointer">
          Choose your Microsoft 365
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img
          src={windows}
          alt=""
        />
        <p className="font-medium underline cursor-pointer">Get Windows 11</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img
          src={accessories}
          alt=""
        />
        <p className="font-medium underline cursor-pointer">
          Shop for accessories
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <img
          src={business}
          alt=""
        />
        <p className="font-medium underline cursor-pointer">Shop Business</p>
      </div>
    </div>
  );
}

export default ChooseSection;
