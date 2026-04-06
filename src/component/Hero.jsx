import React from "react";
import SocialLinks from "./SocialLinks";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ darkMode }) {
  
  const lightColors = {
    bg: "bg-gradient-to-b from-orange-100 via-white to-orange-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    accent: "text-orange-500",
    buttonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
    buttonSecondary:
      "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  };

  const darkColors = {
    bg: "bg-gradient-to-b from-black via-slate-950 to-slate-900",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    accent: "text-orange-400",
    buttonPrimary: "bg-orange-500 hover:bg-orange-600 text-white",
    buttonSecondary:
      "border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white",
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <section
      id="home"
      className={`relative min-h-screen ${colors.bg} overflow-hidden pt-24 transition-colors duration-500`}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
        
        {/* Left - Content */}
        <div className="flex flex-col justify-center space-y-8">
          
          {/* Social Links */}
          <SocialLinks />

          {/* Heading */}
          <div>
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 ${colors.textPrimary}`}>
              Hi, I&apos;m{" "}
              <span className={colors.accent}>QualiCode</span>
            </h1>

            <p className={`text-lg leading-relaxed ${colors.textSecondary}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Facilis et harum dolorem sit minus illo nostrum.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            
            <button
              className={`flex items-center gap-2 px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 ${colors.buttonSecondary}`}
            >
              <Download size={20} />
              Download CV
            </button>

            <motion.button
              className={`flex items-center gap-2 px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:scale-105 active:scale-95 `}
            >
              <Mail size={20} />
              Contact Me
            </motion.button>

          </div>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center lg:justify-end rounded-br-full overflow-hidden">
  <div className="relative max-w-7xl lg:max-w-500">
    <img
      src="/src/assets/CharacterAi.png"
      alt="Developer Character"
      className="w-full h-auto drop-shadow-2xl hover:scale-105 transition duration-500"
    />
  </div>
</div>

      </div>
    </section>
  );
}