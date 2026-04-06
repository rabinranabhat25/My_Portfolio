import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project({ darkMode }) {

  // 🎨 Theme (MATCH other sections EXACTLY)
  const lightColors = {
    bg: "bg-gradient-to-b from-orange-50 via-white to-orange-150",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    card: "bg-white/70 backdrop-blur-lg border border-gray-200",
  };

  const darkColors = {
    // 🔥 FIXED GRADIENT (NO HARD CUT)
    bg: " bg-gradient-to-b from-via-slate-900 to-slate-960 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    card: "bg-white/5 backdrop-blur-lg border border-white/10",
  };

  const colors = darkMode ? darkColors : lightColors;

  // 🎬 Animations
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const project = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with payments & real-time updates.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
      tech: ["React", "Node", "MongoDB"],
    },
    {
      id: 2,
      title: "Task App",
      description: "Realtime collaboration with drag & drop.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400",
      tech: ["Next.js", "Firebase"],
    },
    {
      id: 3,
      title: "Dashboard",
      description: "Analytics dashboard with charts & APIs.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      tech: ["React", "Chart.js"],
    },
  ];

  return (
    <section
      id="project"
      className={`relative py-24 ${colors.bg} transition duration-500`}
    >
      {/* 🌈 SOFT GLOW (FIXED) */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-orange-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-1/3 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>

      {/* 🧠 Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className={`text-5xl lg:text-6xl font-bold mb-4 ${colors.textPrimary}`}>
            My <span className="text-orange-500">Projects</span>
          </h2>
          <p className={`${colors.textSecondary} text-lg max-w-2xl mx-auto`}>
            Some of my recent work showcasing skills and experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ scale: 1.04 }}
              className={`group rounded-2xl overflow-hidden ${colors.card} transition duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]`}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${colors.textPrimary} group-hover:text-orange-500 transition`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 ${colors.textSecondary}`}>
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm">
                  <a className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition">
                    <FaGithub />
                    Code
                  </a>
                  <a className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition">
                    <FaExternalLinkAlt />
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 font-bold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] hover:scale-105">
            View All Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
}