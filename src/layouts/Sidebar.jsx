import React, { useState } from 'react';
import { sidebarAssets } from '../constants/assets';

export default function Sidebar({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: sidebarAssets.clipboardIcon },
    { id: 'getting-started', label: 'Getting Started', icon: sidebarAssets.clipboardIcon1 },
    { id: 'device-integration', label: 'Device Integration', icon: sidebarAssets.clipboardIcon2 },
    { id: 'api-configuration', label: 'API Configuration', icon: sidebarAssets.clipboardIcon3 },
    { id: 'cart-transaction', label: 'Cart Transaction', icon: sidebarAssets.clipboardIcon4 },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: sidebarAssets.clipboardIcon5 },
    { id: 'license-support', label: 'License & Support', icon: sidebarAssets.clipboardIcon6 }
  ];

  return (
    <aside className="border-r border-[#434343] flex flex-col gap-4 px-10 py-8 h-full min-w-[296px]">
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

      {/* Documentation Section */}
      <div className="flex flex-col gap-4">
        <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
          Dokumentasi SDK
        </p>

        {/* Documentation Items */}
        <div className="border-l-2 border-[#434343] flex flex-col gap-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`flex gap-2 items-center pl-4 py-2 cursor-pointer transition-all border-l-2 -ml-0.5 ${
                activePage === item.id
                  ? 'border-[#b6f500]'
                  : 'border-transparent hover:border-[#b6f500]'
              }`}
            >
              <div className="w-6 h-6 shrink-0">
                <img alt={item.label} className="block w-full h-full" src={item.icon} />
              </div>
              <p className={`font-roboto font-normal leading-6 text-base transition-colors ${
                activePage === item.id ? 'text-[#fbfbfb]' : 'text-[#fbfbfb] hover:text-[#b6f500]'
              }`}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
