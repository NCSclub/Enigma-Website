import { motion, AnimatePresence } from "framer-motion";

const AgendaItem = ({ time, title, translate }) => (
  <AnimatePresence>
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: translate ? -10 : 0 }}
      transition={{ duration: 0.8}}
      exit={{ y: 0 }}
      className="flex justify-center items-center gap-2 flex-col w-60 h-60 rounded-full px-3 border-2 border-blue-500 font-text"
    >
      <span className="text-center text-3xl">{time}</span>
      <span className="text-[#0EC9E3] text-center text-xl">{title}</span>
    </motion.div>
  </AnimatePresence>
);

export default AgendaItem;
