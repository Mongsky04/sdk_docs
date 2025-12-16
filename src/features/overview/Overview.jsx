import Introduction from './components/Introduction';
import DeviceSpecifications from './components/DeviceSpecifications';
import FooterNavigation from '../shared/components/FooterNavigation';
import Footer from '../../layouts/Footer';

const Overview = ({ onNavigate }) => {
  return (
    <main className="flex flex-col px-10 py-8 flex-1 overflow-x-hidden">
      <div className="w-full max-w-[904px] mx-auto flex flex-col gap-9">
        <Introduction />
        
        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <DeviceSpecifications />

        {/* Divider */}
        <div className="h-px w-full bg-[#434343]"></div>

        <FooterNavigation 
          nextPage="Installation" 
          nextPageId="getting-started"
          onNavigate={onNavigate}
        />
        <Footer />
      </div>
    </main>
  );
};

export default Overview;
