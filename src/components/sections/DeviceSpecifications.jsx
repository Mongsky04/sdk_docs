import React from 'react';
import Introduction from './Introduction';
import ProductCards from './ProductCards';
import ElectricCurrent from './ElectricCurrent';
import ButtonsSection from './ButtonsSection';
import FunctionButtons from './FunctionButtons';
import MemoryOperations from './MemoryOperations';
import AddFeature from './AddFeature';

export default function DeviceSpecifications() {
  return (
    <div id="device-specifications" className="flex flex-col gap-9">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <div className="bg-[#b6f500] flex items-center justify-center px-3 py-1 rounded-full w-fit">
            <p className="font-roboto font-normal leading-5 text-[#050505] text-[13px]">
              Device Specifications & Controls
            </p>
          </div>
          <h2 className="font-roboto font-bold leading-[42px] text-[28px] text-white">
            Hardware Specifications & Usage Guidance
          </h2>
        </div>
        <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
          This section provides an overview of the BESTON KGiTON scale's key hardware characteristics and practical usage instructions. Here you'll find details on maximum weighing capacity, power input and output requirements, as well as clear guidance on each button and its function so that operators can use the scale safely, accurately, and efficiently in daily operations
        </p>
      </div>

      <ProductCards />
      <ElectricCurrent />
      <ButtonsSection />
      <FunctionButtons />
      <MemoryOperations />
      <AddFeature />
    </div>
  );
}
