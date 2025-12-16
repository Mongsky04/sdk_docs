import React from 'react';

export default function ElectricCurrent() {
  return (
    <div className="flex gap-3">
      <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full w-8 h-8 shrink-0">
        <p className="font-roboto font-normal leading-5 text-[#fbfbfb] text-[13px] text-center">
          1.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
          Electric Current
        </p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center font-roboto font-normal leading-6 text-base">
            <div className="flex items-center text-[#a0a0a0]">
              <p className="w-16">Input</p>
              <p className="text-center w-1.5">:</p>
            </div>
            <p className="text-[#fbfbfb]">AC 220V</p>
          </div>
          <div className="flex gap-2 items-center font-roboto font-normal leading-6 text-base">
            <div className="flex items-center text-[#a0a0a0]">
              <p className="w-16">Output</p>
              <p className="text-center w-1.5">:</p>
            </div>
            <p className="text-[#fbfbfb]">DC 5.6V</p>
          </div>
        </div>
      </div>
    </div>
  );
}
