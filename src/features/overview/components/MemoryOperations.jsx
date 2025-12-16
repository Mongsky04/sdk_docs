import React from 'react';
import { mainContentAssets } from '../../../constants/assets';

const StepItem = ({ title, desc }) => (
  <div className="flex flex-col gap-1">
    <p className="font-roboto font-bold leading-6 text-[#fbfbfb] text-base">
      {title}
    </p>
    <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
      {desc}
    </p>
  </div>
);

export default function MemoryOperations() {
  const saveSteps = [
    { title: 'Place the item on the scale', desc: 'First, position the item you want to price on the scale' },
    { title: 'Press one of the memory buttons (M1–M7)', desc: 'Choose a memory slot (M1 to M7) where you want to store the item\'s price. Each memory slot can hold a different price' },
    { title: 'Enter the item price', desc: 'Input the price of the item using the numeric buttons' },
    { title: 'Press the STORE button', desc: 'After entering the price, press the STORE button to save it to the selected memory slot' },
    { title: 'Confirmation', desc: 'Wait for the display to show the word "Store" to confirm that the price has been successfully saved' }
  ];

  const retrieveSteps = [
    { title: 'Place the item on the scale', desc: 'Begin by placing the item you want to price on the scale' },
    { title: 'Press the appropriate memory button (M1–M7)', desc: 'Select the memory slot (M1 to M7) where the price of the item was previously saved. Press the corresponding button to recall the stored price' }
  ];

  const deleteSteps = [
    { title: 'Place the item on the scale', desc: 'Ensure that the item whose price you wish to delete is on the scale' },
    { title: 'Press the M1–M7 button twice quickly', desc: 'Select the memory slot (M1 to M7) where the price is stored and press the corresponding button twice in quick succession' },
    { title: 'Wait for the price to blink on the display', desc: 'The price will blink on the screen to indicate that it\'s ready to be deleted' },
    { title: 'Press the C button', desc: 'Press C to delete the stored price from the selected memory slot' },
    { title: 'Wait for "Clr" to appear on the display', desc: 'The display will show "Clr" to confirm that the price has been successfully cleared from memory' }
  ];

  return (
    <>
      {/* Save Item Price to Memory */}
      <div className="flex gap-3">
        <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
          <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
            4.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
              Save Item Price to Memory (M1–M7)
            </p>
            <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
              This function allows you to save the price of an item to one of the memory slots (M1–M7) for quick access during future transactions. Here's how it works:
            </p>
          </div>
          <div className="flex items-center justify-center p-6">
            <div className="h-[98px] w-[364px]">
              <img alt="Save to Memory" className="w-full h-full object-cover" src={mainContentAssets.buttonMemory} />
            </div>
          </div>
          
          {saveSteps.map((item, idx) => (
            <StepItem key={idx} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      {/* Retrieve Item Price from Memory */}
      <div className="flex gap-3">
        <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
          <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
            5.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
              Retrieve Item Price from Memory
            </p>
            <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
              This feature allows you to quickly retrieve previously stored item prices from memory for efficient transactions. Here's how to use it:
            </p>
          </div>
          
          {retrieveSteps.map((item, idx) => (
            <StepItem key={idx} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      {/* Delete Stored Price from Memory */}
      <div className="flex gap-3">
        <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
          <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
            6.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
              Delete Stored Price from Memory
            </p>
            <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
              This function allows you to remove a previously saved price from the memory slots (M1–M7). It is helpful for clearing outdated or unnecessary price data from the scale's memory. Here's how to use it:
            </p>
          </div>
          
          {deleteSteps.map((item, idx) => (
            <StepItem key={idx} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </>
  );
}
