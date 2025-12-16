export default function SectionTitle({ badge, title, description }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-1 w-full">
        <div className="bg-[#b6f500] flex items-center justify-center px-3 py-1 rounded-full w-fit">
          <p className="font-roboto font-normal text-[13px] leading-5 text-[#050505]">
            {badge}
          </p>
        </div>
        <p className="font-roboto font-bold text-[28px] leading-[42px] text-white">
          {title}
        </p>
      </div>
      <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
        {description}
      </p>
    </div>
  );
}
