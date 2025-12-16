export default function StepContainer({ stepNumber, title, description, children }) {
  return (
    <div className="flex gap-3 items-start w-full">
      {/* Number Badge */}
      <div className="bg-[#434343] flex items-center justify-center p-1 rounded-full shrink-0 w-8 h-8">
        <p className="font-roboto font-normal text-[13px] leading-5 text-[#fbfbfb] text-center">
          {stepNumber}
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1 max-w-full overflow-hidden">
        <div className="flex flex-col gap-1 w-full">
          <p className="font-roboto font-semibold text-[19px] leading-[29px] text-[#fbfbfb]">
            {title}
          </p>
          {description && (
            <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
