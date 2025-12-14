import React from 'react';
import { rightSidebarAssets } from '../constants/assets';

export default function RightSidebar() {
  return (
    <aside className="flex flex-col gap-16 items-center pr-10 py-8 h-full min-w-[229px]">
      {/* Page Navigation */}
      <div className="flex flex-col gap-4 w-full">
        <p className="font-roboto font-normal leading-5 text-[#a0a0a0] text-[13px]">
          On this page
        </p>

        {/* Navigation Links */}
        <div className="border-l-2 border-[#434343] flex flex-col gap-3 w-full">
          {/* Introduction - Active Link */}
          <div className="border-l-2 border-[#b6f500] -ml-0.5 flex items-center pl-4">
            <p className="font-roboto font-normal leading-6 text-[#fbfbfb] text-base cursor-pointer hover:text-[#b6f500] transition-colors">
              Introduction
            </p>
          </div>

          {/* Device Specifications & Controls */}
          <div className="flex items-center pl-4">
            <p className="font-roboto font-normal leading-6 text-[#fbfbfb] text-base cursor-pointer hover:text-[#b6f500] transition-colors">
              Device Specifications & Controls
            </p>
          </div>
        </div>
      </div>

      {/* Vector Image */}
      <div className="h-[166px] w-[189px]">
        <img alt="KGiTON Logo" className="block w-full h-full" src={rightSidebarAssets.kgitonLogo} />
      </div>
    </aside>
  );
}
