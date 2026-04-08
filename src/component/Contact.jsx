import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact({ darkMode }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => {
       setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
};

  // 🎨 Theme (same as other sections)
  const lightColors = {
    bg: "bg-gradient-to-b from-orange-150 via-white to-orange-50",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    card: "bg-white/70 backdrop-blur-xl border border-gray-200",
  };

  const darkColors = {
    bg: "bg-gradient-to-b from-black via-slate-950 to-slate-900",
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    card: "bg-white/5 backdrop-blur-xl border border-white/10",
  };

  const colors = darkMode ? darkColors : lightColors;

  // 🎬 Animations
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "rawbinranabhat9876@gmail.com" },
    { icon: Phone, label: "Phone", value: "+977 9766852680" },
    { icon: MapPin, label: "Location", value: "Remote / Worldwide / Physical [ Nepal ] " },
  ];

  return (
    <section
      id="contact"
      className={`relative py-24 ${colors.bg} overflow-hidden transition duration-500`}
    >
      {/* 🌈 Smooth Glow Background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 blur-[120px] rounded-full"></div>

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
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className={`${colors.textSecondary} text-lg max-w-2xl mx-auto`}>
            Let’s build something amazing together 🚀
          </p>
        </motion.div>

        {/* 📞 Contact Cards */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-2xl ${colors.card} transition duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]`}
              >
                <Icon className="text-orange-500 mb-3" size={28} />
                <h3 className={`text-lg font-semibold ${colors.textPrimary}`}>
                  {info.label}
                </h3>
                <p className={colors.textSecondary}>{info.value}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 📩 Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* 📝 Form */}
          <motion.div
            variants={fadeUp}
            className={`p-8 rounded-2xl ${colors.card}`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${colors.textPrimary}`}>
              Send a Message
            </h3>

            {submitted && (
              <div className="mb-4 text-orange-400">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field, i) => (
                <input
                  key={i}
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field}
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-orange-500 outline-glow-orange-500/50 focus:outline-none transition"
                />
              ))}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Message..."
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/10 focus:border-orange-500 outline-glow-orange-500/50 focus:outline-none transition"
              />

              {/* 🔥 OUTER GLOW BUTTON */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-full border-2 border-orange-500 text-orange-400 transition duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)]"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* ℹ️ Info Box */}
          <motion.div
            variants={fadeUp}
            className={`p-8 rounded-2xl ${colors.card}`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${colors.textPrimary}`}>
              Let’s Work Together
            </h3>
            <p className={`${colors.textSecondary} mb-6`}>
              I’m open to freelance, full-time, and exciting projects.
            </p>

            <div className="space-y-3 text-sm">
              <p className={colors.textSecondary}>
                ⚡ Response: <span className="text-orange-400">24 hrs</span>
              </p>
              <p className={colors.textSecondary}>
                🌍 Remote Friendly
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}