import { motion } from "framer-motion";

const Button = ({ onClick, children }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="bg-[#15153F] h-20 w-44 rounded-lg font-text text-2xl font-bold max-md:h-15 max-md:w-36
      hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500 hover:duration-300 
      focus:bg-blue-500 focus:shadow-2xl focus:shadow-blue-500 focus:duration-100"
  >
    {children}
  </motion.button>
);

export default Button;
