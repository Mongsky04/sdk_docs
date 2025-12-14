import React, { useState } from 'react';
import { sidebarAssets } from '../constants/assets';

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (key) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <aside className="border-r border-[#434343] flex flex-col gap-6 px-10 py-8 h-full min-w-[296px]">
      {/* Dropdown Container */}
      <div 
        className="border border-[#434343] flex items-center justify-between p-3 rounded-xl w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <div className="flex flex-1 gap-1 items-center">
          <div className="w-4 h-4">
            <img alt="Flutter" className="block w-full h-full" src={sidebarAssets.flutterIcon} />
          </div>
          <p className="flex-1 font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px]">
            Flutter
          </p>
        </div>
        <div className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
          <img alt="Chevron" className="block w-full h-full" src={sidebarAssets.chevronIcon} />
        </div>
      </div>

      {/* Documentation Links */}
      <div className="flex flex-col gap-4 w-[216px]">
        <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
          Dokumentasi SDK
        </p>

        {/* Documentation Items */}
        <div className="border-l-2 border-[#434343] flex flex-col gap-3 w-[216px]">
          {/* Overview - Active Item */}
          <div className="border-l-2 border-[#b6f500] -ml-0.5 flex gap-2 items-center pl-4 py-2 w-full cursor-pointer">
            <div className="flex flex-1 gap-2 items-center">
              <div className="overflow-hidden w-6 h-6 relative">
                <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon} />
                </div>
                <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon1} />
                </div>
                <div className="absolute inset-[40.63%_26.04%_23.96%_26.04%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon2} />
                </div>
              </div>
              <p className="font-roboto font-normal leading-6 text-[#fbfbfb] text-base">
                Overview
              </p>
            </div>
          </div>

          {/* Getting Started */}
          <div 
            className="flex gap-2 items-center pl-4 py-2 w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors rounded"
            onClick={() => toggleItem('getting-started')}
          >
            <div className="flex flex-1 gap-2 items-center">
              <div className="overflow-hidden w-6 h-6 relative">
                <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon} />
                </div>
                <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon1} />
                </div>
                <div className="absolute inset-[40.63%_26.04%_23.96%_26.04%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon2} />
                </div>
              </div>
              <p className="font-roboto font-normal leading-6 text-[#fbfbfb] text-base">
                Getting Started
              </p>
            </div>
            <div className="w-5 h-5">
              <img alt="Chevron" className="block w-full h-full" src={sidebarAssets.chevronIcon} />
            </div>
          </div>

          {/* Overview (Second) */}
          <div 
            className="flex gap-2 items-center pl-4 py-2 w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors rounded"
            onClick={() => toggleItem('overview-2')}
          >
            <div className="flex flex-1 gap-2 items-center">
              <div className="overflow-hidden w-6 h-6 relative">
                <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon} />
                </div>
                <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon1} />
                </div>
                <div className="absolute inset-[40.63%_26.04%_23.96%_26.04%]">
                  <img alt="" className="block w-full h-full" src={sidebarAssets.docIcon2} />
                </div>
              </div>
              <p className="font-roboto font-normal leading-6 text-[#fbfbfb] text-base">
                Overview
              </p>
            </div>
            <div className="w-5 h-5">
              <img alt="Chevron" className="block w-full h-full" src={sidebarAssets.chevronIcon} />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
