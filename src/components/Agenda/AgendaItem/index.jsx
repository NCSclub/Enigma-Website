const AgendaItem = ({ time, title }) => (
  <div className="flex justify-center items-center gap-4 flex-col w-40 h-40 rounded-full border-2 border-blue-500 font-text">
    <span>{time}</span>
    <span className="text-[#0EC9E3]">{title}</span>
  </div>
);

export default AgendaItem;
