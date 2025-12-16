import React, { useState, useEffect } from 'react';
import { rightSidebarAssets } from '../constants/assets';

export default function RightSidebar({ sections = [] }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    // Reset active section when sections change
    if (sections.length > 0 && !sections.find(s => s.id === activeSection)) {
      setActiveSection(sections[0].id);
    }
  }, [sections]);

  useEffect(() => {
    if (sections.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <aside className="flex flex-col gap-16 items-center pr-10 py-8 h-screen w-[229px] shrink-0 sticky top-0 overflow-y-auto">
      {/* Page Navigation */}
      {sections.length > 0 && (
        <div className="flex flex-col gap-4 w-full">
          <p className="font-roboto font-normal leading-5 text-[#a0a0a0] text-[13px]">
            On this page
          </p>

          {/* Navigation Links */}
          <div className="border-l-2 border-[#434343] flex flex-col gap-3 w-full">
            {sections.map((section) => (
              <a 
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={`flex items-center pl-4 border-l-2 -ml-0.5 transition-all duration-300 ease-in-out ${
                  activeSection === section.id ? 'border-[#b6f500]' : 'border-transparent'
                }`}
              >
                <p className={`font-roboto font-normal leading-6 text-base cursor-pointer transition-all duration-300 ease-in-out ${
                  activeSection === section.id ? 'text-[#b6f500] font-medium' : 'text-[#fbfbfb] hover:text-[#b6f500]'
                }`}>
                  {section.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Vector Image */}
      <div className="h-[166px] w-[189px]">
        <img alt="KGiTON Logo" className="block w-full h-full" src={rightSidebarAssets.kgitonLogo} />
      </div>
    </aside>
  );
}
