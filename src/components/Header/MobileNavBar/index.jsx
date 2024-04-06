import Image from "next/image.js";
import navbar from "../navbarContent.js";
import { GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import MobileNavLink from "./MobileNavLink/index.jsx";

const MobileNavBar = ({ isClick, toggleNavBar }) => {
  const menuVars = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      trasition: {
        duration: 0.5,
        ease: [0.12, 0, 0, 39, 0],
      },
    },
    exit: {
      scaleX: 0,
      trasition: {
        duration: 0.5,
        ease: [0.12, 0, 0, 39, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isClick && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full z-10 origin-left absolute top-0 left-0 bg-[#15153F] rounded-md p-6 flex flex-col gap-8 justify-start lg:hidden"
        >
          <div className="w-full flex justify-between">
            <Image
              className="object-cover top-7"
              src="/images/Header/EnigmaLogo.svg"
              alt=""
              width={150}
              height={150}
            />
            <button onClick={toggleNavBar}>
              <GrClose className="text-white w-8 h-8" />
            </button>
          </div>

          <motion.ul
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
            className="text-white font-text text-sm flex flex-col"
          >
            {navbar.map((item, index) => (
              <MobileNavLink key={index} item={item} />
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavBar;
