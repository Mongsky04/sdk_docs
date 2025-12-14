import React from 'react';
import { mainContentAssets } from '../../constants/assets';

export default function ProductCards() {
  const products = [
    { name: 'Sintech SHT-005N', capacity: '30Kg', active: false },
    { name: 'Bilancia', capacity: '40Kg', active: false },
    { name: 'BESTON TCS', capacity: '150Kg', active: true },
    { name: 'Crane Scale', capacity: '300Kg', active: false }
  ];

  return (
    <div className="flex gap-4">
      {products.map((product, index) => (
        <div 
          key={index} 
          className={`flex-1 ${product.active ? 'bg-[#b6f500] border-[#b6f500]' : 'bg-[#585858] border-[#434343]'} border flex flex-col gap-2 overflow-hidden rounded-2xl`}
        >
          <div className="bg-[#050505] flex flex-col gap-4 items-center pb-3 pt-4 px-3">
            <div className="w-10 h-10">
              <img alt={product.name} className="block w-full h-full" src={mainContentAssets.productIcon} />
            </div>
            <p className={`font-roboto font-semibold leading-5 text-[13px] text-center ${product.active ? 'text-[#fbfbfb]' : 'text-white'}`}>
              {product.name}
            </p>
          </div>
          <div className={`flex items-center justify-between px-3 pb-2 font-roboto font-normal leading-5 text-[13px] ${product.active ? 'text-[#050505]' : 'text-white'}`}>
            <div className="flex gap-1 items-center">
              <p>Capacity</p>
              <p>:</p>
            </div>
            <p className="text-center">{product.capacity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
