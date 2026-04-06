// import React from "react";
import { motion } from "framer-motion";

export default function About({ darkMode }) {
  
  //  Theme Colors
  const lightColors = {
    bg: "bg-gradient-to-b from-orange-50 via-white to-orange-100 ",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    accent: "text-orange-500",
    card: "bg-white",
  };

  const darkColors = {
   
    bg: "bg-gradient-to-b from-slate-900 via-slate-950 to-black",

    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    accent: "text-orange-400",
    card: "bg-gray-900",
  };

  const colors = darkMode ? darkColors : lightColors;

  // 🎬 Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
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

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className={`relative min-h-screen ${colors.bg} overflow-hidden pt-24 transition-colors duration-500`}
    >
      {/* 🔵 Background Effects */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        
        {/* 🖼️ Left - Image */}
        <motion.div
          variants={fadeLeft}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-md">
            <motion.img
              src="src/assets/AboutAi.png"
              alt="About Me"
              className="w-full h-auto drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* 📄 Right - Content */}
        <motion.div
          variants={fadeRight}
          className="flex flex-col justify-center space-y-8"
        >
          
          {/* 📝 Text */}
          <motion.div variants={fadeUp}>
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 ${colors.accent}`}>
              About Me
            </h1>

            <p className={`text-lg leading-relaxed ${colors.textSecondary}`}>
              I am a passionate developer who loves building modern and
              responsive web applications. I enjoy learning new technologies
              and creating clean, user-friendly designs.
            </p>
          </motion.div>

          {/* 📊 Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 py-8"
          >
            {[
              { value: "5+", label: "Education" },
              { value: "10+", label: "Years Experience" },
              { value: "100+", label: "Projects Completed" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`text-center p-4 rounded-xl ${colors.card} shadow-md`}
              >
                <h2 className={`text-4xl font-bold ${colors.accent}`}>
                  {item.value}
                </h2>
                <p className={colors.textSecondary}>{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔘 Button */}
          <motion.button
  variants={fadeUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center gap-2 px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95"
>
  <span className="relative z-10">
    Download CV
  </span>

  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-100 blur-xl bg-orange-500"></span>
</motion.button>

        </motion.div>
      </motion.div>
    </section>
  );
}