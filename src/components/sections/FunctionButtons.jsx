import React from 'react';
import { mainContentAssets } from '../../constants/assets';

const functionButtonsData = [
  { title: 'C (Clear)', desc: 'This button clears the display and removes any stored price or summation memory. It is useful when starting a new transaction or resetting the system' },
  { title: 'ADD (Add)', desc: 'The ADD button allows the user to add prices from two or more items into a single transaction process. This is helpful for calculating the total cost of multiple items at once' },
  { title: 'TARE', desc: 'This button clears the display and removes any stored price or summation memory. It is useful when starting a new transaction or resetting the system' },
  { title: 'ZERO', desc: 'The ZERO button resets the scale to 0, particularly useful when the scale is reading a weight above zero (after placing an item on it). This ensures that the scale starts from a clean zero reading' },
  { title: 'STORE', desc: 'The STORE button saves the current price into memory. This is essential for storing individual item prices for future use or reference' },
  { title: 'M1–M7 (Memory 1 – 7)', desc: 'These buttons allow the user to save and retrieve the price of items to/from memory slots 1 to 7. This feature helps quickly recall preset prices for frequently sold items' }
];

export default function FunctionButtons() {
  return (
    <div className="flex gap-3">
      <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
        <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
          3.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
            Function Buttons
          </p>
          <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
            These function buttons are designed to provide additional control over the scale's display, memory, and pricing functionality. Below is a detailed description of each button:
          </p>
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="h-[200px] w-[231px]">
            <img alt="Function Buttons" className="w-full h-full object-cover" src={mainContentAssets.buttonFunctions} />
          </div>
        </div>
        
        {functionButtonsData.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <p className="font-roboto font-bold leading-6 text-[#fbfbfb] text-base">
              {item.title}
            </p>
            <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
