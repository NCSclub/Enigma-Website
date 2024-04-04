const AgendaItem = ({ time, title, className }) => (
  <div
    className={`flex justify-center items-center gap-2 flex-col w-40 h-40 rounded-full p-1
  border-2 border-blue-500 font-text ${className} max-xl:w-32 max-xl:h-32 max-lg:w-28 max-lg:h-28 max-sm:w-20 max-sm:h-20`}
  >
    <span className="text-center max-xl:text-sm max-lg:xs max-sm:text-[10px]">{time}</span>
    <span className="text-[#0EC9E3] text-center max-xl:text-xs max-lg:text-[10px] max-sm:text-[8px]">{title}</span>
  </div>
);

export default AgendaItem;
