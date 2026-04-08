import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Zap } from "lucide-react";

export default function Skills({ darkMode }) {

  // 🎨 Theme (same pattern as your other sections)
  const lightColors = {
    bg: "bg-gradient-to-b from-orange-100 via-white to-orange-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    card: "bg-white/70 backdrop-blur-lg border border-gray-200",
  };

  const darkColors = {
    bg: " bg-gradient-to-b from-black via-slate-950 to-slate-900",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    card: "bg-white/5 backdrop-blur-lg border border-white/10",
  };

  const colors = darkMode ? darkColors : lightColors;

  // 🎬 Animations
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-8 h-8 text-orange-500" />,
      skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      skills: ["Node.js", "Express", "SQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "DevOps",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      skills: [ "Vercel"],
    },
    {
      title: "Design",
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      skills: ["Figma", "UI/UX", "Responsive Design"],
    },
  ];

  return (
    <section
      id="skills"
      className={`relative py-24 ${colors.bg} overflow-visible transition duration-500`}
    >
      {/* 🌈 Glow Background */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* 🧠 Header */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className={`text-5xl lg:text-6xl font-bold mb-4 ${colors.textPrimary}`}>
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className={`${colors.textSecondary} text-lg max-w-2xl mx-auto`}>
            Here are the technologies and tools I’m proficient in. I’m constantly improving.
          </p>
        </motion.div>

        {/* 📦 Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className={`group relative p-6 rounded-2xl ${colors.card} transition duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]`}
            >
              {/* Icon */}
              <div className="mb-4 group-hover:scale-110 transition duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 ${colors.textPrimary}`}>
                {category.title}
              </h3>

              {/* Skills */}
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-sm ${colors.textSecondary}`}
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${colors.textPrimary}`}>
                Ready to work together?
              </h3>
              <p className={colors.textSecondary}>
                Let’s build something amazing together.
              </p>
            </div>

            {/* 🔘 Glow Button (OUTER GLOW) */}
            <button className="px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] hover:scale-105 active:scale-95">
              Get in Touch
            </button>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}