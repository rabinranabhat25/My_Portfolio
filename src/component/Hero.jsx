import React from "react";
import SocialLinks from "./SocialLinks";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ darkMode }) {

  // 🎨 Theme
  const lightColors = {
    bg: "bg-gradient-to-b from-orange-100 via-white to-orange-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    accent: "text-orange-500",
  };

  const darkColors = {
    bg: "bg-gradient-to-b from-black via-slate-950 to-slate-900",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    accent: "text-orange-400",
  };

  const colors = darkMode ? darkColors : lightColors;

  // 🎬 Animations
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen ${colors.bg} overflow-hidden pt-24 transition-colors duration-500`}
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]"
      >
        {/* Left - Content */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-center space-y-8"
        >
          <SocialLinks />

          <div>
            <h1
              className={`text-5xl lg:text-6xl font-bold mb-6 ${colors.textPrimary}`}
            >
              Hi, I&apos;m{" "}
              <span className={colors.accent}>QualiCode</span>
            </h1>

            <p className={`text-lg leading-relaxed ${colors.textSecondary}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis et harum dolorem sit minus illo nostrum.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
            >
              <Download size={20} />
              Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)]"
            >
              <Mail size={20} />
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          variants={fadeLeft}
          className="flex justify-center lg:justify-end rounded-br-full overflow-hidden"
        >
          <div className="relative w-full max-w-[700px] lg:max-w-[1000px]">
            <motion.img
              src="/src/assets/CharacterAi.png"
              alt="Developer Character"
              className="w-full h-auto drop-shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}