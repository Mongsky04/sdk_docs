import React from 'react';
import Introduction from './sections/Introduction';
import DeviceSpecifications from './sections/DeviceSpecifications';
import FooterNavigation from './sections/FooterNavigation';
import Footer from './sections/Footer';

export default function MainContent() {
  return (
    <main className="flex flex-col gap-9 px-10 py-8 flex-1 max-w-[904px] mx-auto w-full">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-9">
        <Introduction />
        
        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <DeviceSpecifications />

        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <FooterNavigation />
        <Footer />
      </div>
    </main>
  );
}
