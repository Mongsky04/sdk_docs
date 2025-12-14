import React from 'react';

export default function Introduction() {
  return (
    <div id="introduction" className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <div className="bg-[#b6f500] flex items-center justify-center px-3 py-1 rounded-full w-fit">
          <p className="font-roboto font-normal leading-5 text-[#050505] text-[13px]">
            Introduction
          </p>
        </div>
        <h1 className="font-roboto font-bold leading-[42px] text-[28px] text-white">
          Get started with the KGiTON
        </h1>
      </div>
      <p className="font-roboto font-normal leading-6 text-[#a0a0a0] text-base">
        Integrate the KGiTON BLE scale into your Flutter app. The KGiTON Flutter SDK handles everything from device scanning and pairing, stable BLE connectivity (automatic connect, disconnect, and reconnect), real-time weight data streaming, and transaction synchronization with the KGiTON backend, including payment/checkout status
      </p>
      
      <div className="flex flex-col">
        <p className="font-roboto font-semibold leading-[29px] text-[#fbfbfb] text-[19px]">
          Key Feature
        </p>
        <div className="font-roboto font-normal text-[#a0a0a0] text-base">
          <p className="leading-6 mb-0">The KGiTON SDK offers a variety of features to simplify the integration of BLE scales into your Flutter applications, including:</p>
          <ul className="list-disc pl-6">
            <li className="leading-6 mb-0">
              <span className="text-[#fbfbfb]">Bluetooth Low Energy (BLE) Connectivity</span>: Easy scanning and connecting to BLE-enabled scales
            </li>
            <li className="leading-6 mb-0">
              <span className="text-[#fbfbfb]">Real-time Weight Data Streaming:</span> Continuous weight data updates from the connected scale
            </li>
            <li className="leading-6 mb-0">
              <span className="text-[#fbfbfb]">Backend Synchronization:</span> Automatic synchronization of transaction and weight data with the KGiTON backend
            </li>
            <li className="leading-6">
              <span className="text-[#fbfbfb]">Multi-platform Support:</span> Works seamlessly with both Android and iOS applications using Flutter
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
