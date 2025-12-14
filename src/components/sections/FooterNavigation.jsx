import React from 'react';
import { mainContentAssets } from '../../constants/assets';

export default function FooterNavigation() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col w-[304px]">
        {/* Previous - Empty */}
      </div>
      <div className="flex flex-col w-[304px]">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col justify-center w-[264px]">
            <p className="font-roboto font-bold leading-6 text-[#fbfbfb] text-base text-right">
              Next
            </p>
            <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base text-right">
              Installation
            </p>
          </div>
          <div className="w-7 h-7">
            <img alt="Next" className="block w-full h-full" src={mainContentAssets.arrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
