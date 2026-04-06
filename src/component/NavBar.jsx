
import { motion } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react'; // ✅ added Moon

import React, { useState } from 'react';

export const NavBar = ({ darkMode, toggleDarkMode }) => { // ✅ fixed name
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Project', link: '#project' },
    { name: 'Contact', link: '#contact' }
  ];

  const lightColors = {
    navBg: 'bg-gradient-to-br from-orange-200 to-white', // ✅ fixed
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textHover: 'text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500', // ✅ fixed
    button: 'from-orange-500 to-amber-500', // ✅ fixed
  };

  const darkColors = {
    navBg: 'bg-gradient-to-br from-gray-700 to-black', // ✅ fixed
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    textHover: 'text-orange-400',
    textActive: 'text-orange-400',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to-amber-500',
  };

  const colors = darkMode ? darkColors : lightColors;

  const handleNavClick = (itemName) => { // ✅ fixed spelling
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 drop-shadow-lg`} // ✅ FIXED BIG BUG
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">

          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <span className={`text-xl pointer-none: font-bold ${colors.textPrimary}`}>
             Mr <span className="text-orange-400">.</span>
              RABIN <span className="text-orange-400">.</span>
            </span>
          </motion.a>

          {/* Navigation */}
          <div className="lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link} // ✅ fixed
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-500 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-400`
                  }`} // ✅ fixed spacing
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-r h-0.5 ${colors.indicator}`} // ✅ fixed
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2">

            {/* Dark Mode Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode} // ✅ fixed name
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              } transition-colors`}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" /> // ✅ fixed spacing
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me */}
            <motion.a
              href="#contact"
              className={`hidden lg:block px-6 py-2 rounded-full font-semibold bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>
          {/* mobile menu button  */}
          <div className='flex lg:hidden items-center space-x-4 px-2'>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-700'}`} />
              )}
            </motion.button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{duration:0.3}}
            className={`absolute top-full left-0 right-0 lg:hidden mt-2 ${darkMode ? 'bg-gradient-to-br from-gray-800/50 to-transparent backdrop-blur-3xl'
              : 'bg-gradient-to-br from-white/50 to-transparent backdrop-blur-3xl'
            
            } backdrop:backdrop-blur-lg rounded-lg shadow-lg border ${darkMode ? 'bg-gradient-to-br from-gray-800/50 to-transparent backdrop-blur-3xl' : 'bg-gradient-to-br from-white/50 to-transparent backdrop-blur-3xl'}`}
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => {
                    handleNavClick(item.name)}}
                  className="block">
                  <motion.div

                    whileHover={{ x:5 }}

                    className={` py-3 px-4 rounded-lg text-center ${
                      activeSection === item.name.toLowerCase()
                        ? darkMode? 'text-gray-800' : 'text-orange-50'
                        : `${colors.textSecondary} hover:text-orange-400`
                    }`}>
                      <span className={`font-medium ${ activeSection === item.name.toLowerCase() ? colors.textActive 
                        : colors.textSecondary}`}>
                           {item.name}
                          </span>
                   
                  </motion.div>
                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={()=> setIsMenuOpen(false)}
                whileTap={{scale:0.95}}
                className={`block py-3 px-4 rounded-lg text-center font-semibold bg-linear-to-r ${
                  colors.button } text-white shadow-md hover:shadow-lg transition-shadow`}
                whileHover={{ x:5 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};