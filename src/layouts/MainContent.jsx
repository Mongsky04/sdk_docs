import React, { useEffect } from 'react';
import Overview from '../features/overview/Overview';
import GettingStarted from '../features/getting-started/GettingStarted';

export default function MainContent({ activePage, setRightSidebarSections, setActivePage }) {
  useEffect(() => {
    // Set sections for right sidebar based on active page
    if (activePage === 'overview') {
      setRightSidebarSections([
        { id: 'introduction', label: 'Introduction' },
        { id: 'device-specifications', label: 'Device Specifications & Controls' }
      ]);
    } else if (activePage === 'getting-started') {
      setRightSidebarSections([
        { id: 'sdk-installation', label: 'SDK Installation Guide' },
        { id: 'technical-specs', label: 'Technical Specifications' },
        { id: 'platform-setup', label: 'Platform-Specific Setup' }
      ]);
    } else {
      setRightSidebarSections([]);
    }
  }, [activePage, setRightSidebarSections]);

  // Render Overview page (default)
  if (activePage === 'overview') {
    return <Overview onNavigate={setActivePage} />;
  }

  // Render Getting Started / Installation page
  if (activePage === 'getting-started') {
    return <GettingStarted onNavigate={setActivePage} />;
  }

  // Default fallback
  return (
    <main className="flex flex-col gap-9 px-10 py-8 flex-1 max-w-[904px] mx-auto w-full">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-9">
        <p className="text-white">Page not found: {activePage}</p>
      </div>
    </main>
  );
}
