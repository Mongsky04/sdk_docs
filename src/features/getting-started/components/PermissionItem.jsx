export default function PermissionItem({ name, description }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="bg-[#434343] flex items-center justify-center px-1 py-1 rounded-lg w-fit">
        <p className="font-roboto font-normal text-base leading-6 text-[#fbfbfb]">
          {name}
        </p>
      </div>
      <p className="font-roboto font-normal text-base leading-6 text-[#a0a0a0]">
        {description}
      </p>
    </div>
  );
}
