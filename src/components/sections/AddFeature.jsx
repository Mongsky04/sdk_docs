import React from 'react';

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

const Badge = ({ text }) => (
  <div className="bg-[#b6f500] flex items-center justify-center px-3 py-1 rounded-full w-fit">
    <p className="font-roboto font-normal leading-5 text-[#050505] text-[13px]">
      {text}
    </p>
  </div>
);

export default function AddFeature() {
  const firstItemSteps = [
    { title: 'Place the first item on the scale', desc: 'Start by placing the first item you wish to price on the scale' },
    { title: 'Enter the price of the first item', desc: 'Use the numeric buttons to input the price for the first item' },
    { title: 'Press ADD', desc: 'Press the ADD button, and the display will show "Add 1" to indicate that the first item\'s price has been added to the total' },
    { title: 'Press ADD again', desc: 'This will bring the display back to showing the price of the first item' },
    { title: 'Remove the first item from the scale', desc: 'Once the first item is removed, the total price will include the price of that item' }
  ];

  const nextItemSteps = [
    { title: 'Place the second item on the scale', desc: 'Now, place the second item on the scale' },
    { title: 'Enter the price of the second item', desc: 'Input the price for the second item' },
    { title: 'Press ADD again', desc: 'The total price will be updated with the new item, and the display will show "Add 1" along with the updated total' },
    { title: 'Repeat for additional items', desc: 'You can continue to add more items by repeating the steps for each additional item' }
  ];

  const exitSteps = [
    { title: 'Press C', desc: 'Press the C button when the display shows "Add 1" or "Add 2"' },
    { title: 'Wait for "Clr" to appear', desc: 'The display will show "Clr" to confirm that the ADD mode has been cleared and the total price calculation is complete' }
  ];

  return (
    <div className="flex gap-3">
      <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
        <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
          7.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
            Calculate Total Price of Multiple Items (ADD Feature)
          </p>
          <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
            The ADD feature allows you to quickly calculate the total price of multiple items in one transaction by adding their individual prices together. Here's how it works:
          </p>
        </div>
        
        {firstItemSteps.map((item, idx) => (
          <StepItem key={idx} title={item.title} desc={item.desc} />
        ))}

        <Badge text="For the next item" />

        {nextItemSteps.map((item, idx) => (
          <StepItem key={idx} title={item.title} desc={item.desc} />
        ))}

        <Badge text="To exit ADD mode" />

        {exitSteps.map((item, idx) => (
          <StepItem key={idx} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}
