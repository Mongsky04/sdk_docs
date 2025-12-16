import { useState } from 'react';

export default function PlatformTabs({ androidContent, iosContent }) {
  const [activeTab, setActiveTab] = useState('android');

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Tab Headers */}
      <div className="bg-[#434343] flex gap-1 items-center p-1 rounded-2xl w-fit">
        <button
          onClick={() => setActiveTab('android')}
          className={`flex gap-1 items-center px-2 py-2 rounded-xl transition-colors ${
            activeTab === 'android' ? 'bg-[#050505]' : ''
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.5233 10.0264H6.47699C5.66068 10.0264 5 10.687 5 11.5033V19.5231C5 20.3394 5.66068 21 6.47699 21H17.5233C18.3396 21 19.0003 20.3394 19.0003 19.5231V11.5033C19.0003 10.687 18.3396 10.0264 17.5233 10.0264Z"
              fill={activeTab === 'android' ? 'white' : '#727272'}
            />
            <path
              d="M15.6 7.00004V5.40004C15.6 4.62684 14.9732 4.00004 14.2 4.00004H9.80004C9.02684 4.00004 8.40004 4.62684 8.40004 5.40004V7.00004H15.6Z"
              fill={activeTab === 'android' ? 'white' : '#727272'}
            />
          </svg>
          <p
            className={`font-roboto font-normal text-base leading-6 ${
              activeTab === 'android' ? 'text-white' : 'text-[#727272]'
            }`}
          >
            Android
          </p>
        </button>

        <button
          onClick={() => setActiveTab('ios')}
          className={`flex gap-1 items-center px-2 py-2 rounded-xl transition-colors ${
            activeTab === 'ios' ? 'bg-[#050505]' : ''
          }`}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.05 20.28C15.82 21.23 14.53 21.18 13.29 20.59C11.98 20 10.77 19.98 9.38 20.59C7.67 21.38 6.73 21.3 5.64 20.28C-1.19 13.2 -0.35 2.27 7.34 1.87C9.28 1.98 10.63 3 11.75 3.08C13.45 2.77 15.09 1.71 16.89 1.85C19.07 2.04 20.71 2.97 21.81 4.64C17.23 7.43 18.27 13.44 22.5 15.13C21.67 17.27 20.61 19.38 17.05 20.28Z"
              fill={activeTab === 'ios' ? 'white' : '#727272'}
            />
            <path
              d="M11.67 1.83C11.45 6.12 15.05 8.37 15.35 8.53C13.56 11.04 11.08 10.71 10.25 10.47C8.6 10.02 7.08 11.08 6.24 11.08C5.39 11.08 4.13 10.51 2.84 10.53C1.05 10.56 -0.56 11.59 -1.5 13.28C-3.44 16.73 -1.94 21.9 -0.04 24.73C0.9 26.13 2 27.71 3.47 27.66C4.72 27.61 5.22 26.84 6.76 26.84C8.28 26.84 8.74 27.66 10.06 27.64C11.42 27.61 12.39 26.21 13.31 24.8C14.37 23.19 14.8 21.62 14.82 21.54C14.79 21.51 11.89 20.41 11.67 1.83Z"
              fill={activeTab === 'ios' ? 'white' : '#727272'}
            />
          </svg>
          <p
            className={`font-roboto font-normal text-base leading-6 ${
              activeTab === 'ios' ? 'text-white' : 'text-[#727272]'
            }`}
          >
            IOS
          </p>
        </button>
      </div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === 'android' ? androidContent : iosContent}
      </div>
    </div>
  );
}
