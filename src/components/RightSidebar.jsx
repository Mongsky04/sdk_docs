import React, { useState, useEffect } from 'react';
import { rightSidebarAssets } from '../constants/assets';

export default function RightSidebar() {
  const [activeSection, setActiveSection] = useState('introduction');

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    // Find the scrollable container (the wrapper div around main)
    const scrollContainer = document.querySelector('main')?.parentElement;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const intro = document.getElementById('introduction');
      const device = document.getElementById('device-specifications');
      
      if (!intro || !device) return;

      const scrollPosition = scrollContainer.scrollTop + 150; // offset for early trigger
      
      const introTop = intro.offsetTop;
      const deviceTop = device.offsetTop;

      if (scrollPosition >= deviceTop) {
        setActiveSection('device-specifications');
      } else if (scrollPosition >= introTop) {
        setActiveSection('introduction');
      }
    };

    handleScroll(); // Check initial state
    scrollContainer.addEventListener('scroll', handleScroll);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <a 
            href="#introduction"
            onClick={(e) => handleNavClick(e, 'introduction')}
            className={`flex items-center pl-4 border-l-2 -ml-0.5 transition-all ${
              activeSection === 'introduction' ? 'border-[#b6f500]' : 'border-transparent'
            }`}
          >
            <p className={`font-roboto font-normal leading-6 text-base cursor-pointer transition-colors ${
              activeSection === 'introduction' ? 'text-[#b6f500]' : 'text-[#fbfbfb] hover:text-[#b6f500]'
            }`}>
              Introduction
            </p>
          </a>

          {/* Device Specifications & Controls */}
          <a 
            href="#device-specifications"
            onClick={(e) => handleNavClick(e, 'device-specifications')}
            className={`flex items-center pl-4 border-l-2 -ml-0.5 transition-all ${
              activeSection === 'device-specifications' ? 'border-[#b6f500]' : 'border-transparent'
            }`}
          >
            <p className={`font-roboto font-normal leading-6 text-base cursor-pointer transition-colors ${
              activeSection === 'device-specifications' ? 'text-[#b6f500]' : 'text-[#fbfbfb] hover:text-[#b6f500]'
            }`}>
              Device Specifications & Controls
            </p>
          </a>
        </div>
      </div>

      {/* Vector Image */}
      <div className="h-[166px] w-[189px]">
        <img alt="KGiTON Logo" className="block w-full h-full" src={rightSidebarAssets.kgitonLogo} />
      </div>
    </aside>
  );
}
