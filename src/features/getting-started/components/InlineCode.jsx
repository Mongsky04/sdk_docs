export default function InlineCode({ children }) {
  return (
    <span className="bg-[#434343] px-1 py-1 rounded-lg font-roboto font-normal text-base leading-6 text-[#fbfbfb]">
      {children}
    </span>
  );
}
