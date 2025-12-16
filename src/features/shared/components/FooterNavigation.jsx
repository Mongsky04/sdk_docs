import React from 'react';
import arrowLeft from '../../../assets/arrow-left.svg';
import arrowRight from '../../../assets/arrow-right.svg';

export default function FooterNavigation({ previousPage, nextPage, previousPageId, nextPageId, onNavigate }) {
  return (
    <div className="flex items-center justify-between w-full max-w-[904px]">
      {/* Previous */}
      <div className="flex flex-col w-[304px]">
        {previousPage && (
          <button 
            onClick={() => onNavigate && onNavigate(previousPageId)}
            className="flex gap-1 items-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="w-7 h-7 shrink-0">
              <img alt="Previous" className="block w-full h-full" src={arrowLeft} />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-roboto font-bold leading-6 text-[#fbfbfb] text-base">
                Previous
              </p>
              <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
                {previousPage}
              </p>
            </div>
          </button>
        )}
      </div>
      
      {/* Next */}
      <div className="flex flex-col w-[304px]">
        {nextPage && (
          <button 
            onClick={() => onNavigate && onNavigate(nextPageId)}
            className="flex gap-1 items-center hover:opacity-80 transition-opacity cursor-pointer ml-auto"
          >
            <div className="flex flex-col justify-center">
              <p className="font-roboto font-bold leading-6 text-[#fbfbfb] text-base text-right">
                Next
              </p>
              <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base text-right">
                {nextPage}
              </p>
            </div>
            <div className="w-7 h-7 shrink-0">
              <img alt="Next" className="block w-full h-full" src={arrowRight} />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
