import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SocialLinks({ darkMode }) {
  
  const lightColors = {
    bg: "bg-gray-200",
    text: "text-gray-800",
  };

  const darkColors = {
    bg: "bg-gray-700",
    text: "text-white",
  };

  const colors = darkMode ? darkColors : lightColors;

  const socialItems = [
    { icon: <FaGithub />, link: "https://github.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
  ];

  return (
    <div className="flex gap-4">
      {socialItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}

          whileHover={{
            scale: 1.2,
            rotate: 5,
          }}

          whileTap={{ scale: 0.9 }}

          className={`p-3 rounded-full ${colors.bg} ${colors.text} 
          hover:bg-orange-500 hover:text-white 
          transition duration-300 shadow-md hover:shadow-xl`}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}