const RequirementsTable = () => {
  const requirements = [
    { tool: 'Flutter SDK', version: '3.0.0' },
    { tool: 'Dart SDK', version: '3.10.0' },
    { tool: 'Android Studio', version: '2022.1.1' },
    { tool: 'Xcode', version: '14.0' }
  ];

  return (
    <div className="border border-[#434343] flex flex-col overflow-hidden rounded-[24px] w-full">
      {/* Header */}
      <div className="bg-[#434343] flex w-full">
        <div className="flex-1 flex items-center justify-center p-4 border-b border-[#434343]">
          <p className="font-roboto text-base leading-6 text-[#a0a0a0] text-center">
            Tools
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center p-4 border-b border-[#434343]">
          <p className="font-roboto text-base leading-6 text-[#a0a0a0] text-center">
            Requirements
          </p>
        </div>
      </div>

      {/* Rows */}
      {requirements.map((req, index) => (
        <div key={index} className="flex w-full">
          <div className="flex-1 flex items-center justify-center p-4">
            <p className="font-roboto text-base leading-6 text-[#fbfbfb] text-center">
              {req.tool}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <p className="font-roboto text-base leading-6 text-[#fbfbfb] text-center">
              {req.version}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequirementsTable;
