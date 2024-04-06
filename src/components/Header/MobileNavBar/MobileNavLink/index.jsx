import Link from "next/link.js";
import { motion } from "framer-motion";

const MobileNavLink = ({ item }) => {
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <div key={item.index} className="overflow-hidden">
      <motion.button
        variants={mobileLinkVars}
        className="hover:bg-slate-400 text-start h-12 hover:rounded-md"
      >
        <Link href={item.link}>
          <span>{item.title}</span>
        </Link>
      </motion.button>
    </div>
  );
};

export default MobileNavLink;
