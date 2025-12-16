import SDKInstallation from './components/SDKInstallation';
import TechnicalSpecs from './components/TechnicalSpecs';
import PlatformSetup from './components/PlatformSetup';
import FooterNavigation from '../shared/components/FooterNavigation';
import Footer from '../../layouts/Footer';

const GettingStarted = ({ onNavigate }) => {
  return (
    <main className="flex flex-col px-10 py-8 flex-1 overflow-x-hidden">
      <div className="w-full max-w-[904px] mx-auto flex flex-col gap-9">
        <SDKInstallation />

        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <TechnicalSpecs />

        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <PlatformSetup />

        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <FooterNavigation 
          previousPage="Overview" 
          nextPage="Device Integration"
          previousPageId="overview"
          nextPageId="device-integration"
          onNavigate={onNavigate}
        />
        <Footer />
      </div>
    </main>
  );
};

export default GettingStarted;
