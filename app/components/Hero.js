"use client";
import { motion } from "motion/react";
function Hero() {
  return (
    <main className="h-screen flex items-center mx-auto w-4/5 relative heroBg">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-start md:text-center w-full "
      >
        <p className="text-xl font-medium text-neutral-400 font-mono motion-preset-typewriter">
          Hello My Name is,
        </p>
        <h1 className="text-4xl md:text-8xl font-bold text-neutral-100 animate-fadeIn ">
          Michael Tom<span className="text-white font-mono">.</span>
        </h1>
        <p className="text-4xl lg:text-nowrap md:text-6xl font-bold text-neutral-400 font-sans ">
          I am a Frontend Web Developer <span>.</span>
        </p>
      </motion.div>
    </main>
  );
}

export default Hero;
