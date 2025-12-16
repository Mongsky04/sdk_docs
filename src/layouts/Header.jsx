import React from 'react';
import { headerAssets } from '../constants/assets';

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-[rgba(5,5,5,0.6)] border-b border-[#434343] flex items-center justify-between px-[40px] py-[28px] w-full">
      {/* Logo Container */}
      <div className="flex gap-[20px] items-center">
        <div className="h-[24px] w-[153px]">
          <img alt="KGiTON Logo" className="block w-full h-full" src={headerAssets.logo} />
        </div>
        <div className="bg-[#434343] flex items-center justify-center px-[12px] py-[8px] rounded-[12px]">
          <p className="font-roboto font-normal leading-[20px] text-[#fbfbfb] text-[13px]">
            v1.0.0
          </p>
        </div>
      </div>

      {/* Search Container */}
      <div className="flex gap-[24px] items-center">
        {/* Search Bar */}
        <div className="border border-[#434343] flex gap-[10px] items-center justify-center px-[20px] py-[12px] rounded-[100px] w-[267px]">
          <div className="flex flex-1 gap-[8px] items-center">
            <div className="w-[24px] h-[24px] overflow-hidden">
              <img alt="Search" className="block w-full h-full" src={headerAssets.searchIcon} />
            </div>
            <p className="font-roboto font-normal leading-[24px] text-[#434343] text-[16px]">
              Search
            </p>
          </div>
          
          {/* Shortcut */}
          <div className="flex gap-[4px] items-center">
            <div className="bg-[#434343] flex items-center p-[4px] rounded-[4px]">
              <div className="w-[10px] h-[10px]">
                <img alt="Command" className="block w-full h-full" src={headerAssets.commandIcon} />
              </div>
            </div>
            <p className="font-roboto font-normal leading-[17px] text-[11px] text-center text-white">
              +
            </p>
            <div className="bg-[#434343] flex flex-col items-center justify-center p-[4px] rounded-[4px] w-[18px] h-[18px]">
              <p className="font-roboto font-normal leading-[17px] text-[11px] text-center text-white">
                K
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Icon Container */}
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#434343] flex items-start overflow-hidden p-[8px] rounded-[100px] hover:bg-[#5a5a5a] transition-colors"
        >
          <div className="w-[28px] h-[28px]">
            <img alt="GitHub" className="block w-full h-full" src={headerAssets.githubIcon} />
          </div>
        </a>
      </div>
    </header>
  );
}
