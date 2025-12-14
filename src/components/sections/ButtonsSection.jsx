import React from 'react';
import { mainContentAssets } from '../../constants/assets';

export default function ButtonsSection() {
  return (
    <div className="flex gap-3">
      <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
        <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
          2.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
            Buttons and Their Functions (24 Buttons), Number Buttons (0–9)
          </p>
          <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
            Used to enter numbers in the Price field
          </p>
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="h-[200px] w-[231px]">
            <img alt="Number Buttons" className="w-full h-full object-cover" src={mainContentAssets.buttonNumbers} />
          </div>
        </div>
        <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
          Each button label directly reflects its corresponding number input for easy user interaction
        </p>
        <div className="bg-[#063467] border-l-8 border-[#0f7bf6] flex flex-col gap-1 px-5 py-2 rounded-xl">
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="absolute inset-[8.33%_12.5%]">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none w-full h-full" src={mainContentAssets.noteIcon1} />
                </div>
              </div>
              <div className="absolute bottom-1/4 left-1/2 right-[4.17%] top-[29.17%]">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none w-full h-full" src={mainContentAssets.noteIcon2} />
                </div>
              </div>
              <div className="absolute inset-[34.38%_36.46%_26.04%_30.21%]">
                <div className="absolute inset-0">
                  <img alt="" className="block max-w-none w-full h-full" src={mainContentAssets.noteIcon3} />
                </div>
              </div>
            </div>
            <p className="font-roboto font-bold leading-[29px] text-[#fbfbfb] text-[19px]">
              Note:
            </p>
          </div>
          <p className="font-roboto font-normal leading-6 text-[#fbfbfb] text-base">
            The button (.) for the decimal point is not yet functional.
          </p>
        </div>
      </div>
    </div>
  );
}
