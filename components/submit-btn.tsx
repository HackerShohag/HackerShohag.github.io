import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  const spiralAnimation = {
    x: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, window.innerWidth],
    y: [0, -10, -20, -30, -40, -50, -60, -70, -80, -90, -window.innerWidth],
    rotate: [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300],
    scale: [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3],
    transition: { duration: 4, ease: "easeInOut" },
    color: "#000000",
  };

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane />
          <motion.div
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
            initial={{ x: 0, y: 0, scale: 1, rotate: 0 }}
            // animate={spiralAnimation}
          >
            <FaPaperPlane />
          </motion.div>
        </>
      )}
    </button>
  );
}
