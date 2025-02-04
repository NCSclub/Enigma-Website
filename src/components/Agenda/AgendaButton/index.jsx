import { motion } from "framer-motion";
import { memo } from "react";

const MemoizedButton = memo(({ onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-[#15153F] h-24 w-52 rounded-lg font-text text-2xl font-bold max-md:h-16 max-md:w-40
      hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:duration-300 
      focus:bg-blue-500 focus:shadow-2xl focus:shadow-blue-500 focus:duration-100"
  >
    {children}
  </motion.button>
));

// Set the displayName for MemoizedButton component
MemoizedButton.displayName = 'Button';

export default MemoizedButton;

