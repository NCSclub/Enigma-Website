"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WhyWaitSection = () => {
  return (
    <section className="w-screen h-[80vh] flex justify-center items-center gap-10 p-5">
      <div>
        <Image
          alt=""
          src="/images/WhyWait/whywait.svg"
          width={500}
          height={500}
        />
      </div>
      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-36 h-14 max-lg:w-32 max-lg:h-10 font-text bg-[#0598CE] rounded-lg text-white text-center hover:bg-[#0598cea2]"
        >
          <Link href="/">Register</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default WhyWaitSection;
