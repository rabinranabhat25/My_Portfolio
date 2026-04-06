import React, { useEffect, useState } from 'react'
import { NavBar } from './component/NavBar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Project'


const App = () => {
const[darkMode, setDarkMode] = useState(true)
useEffect(()=>{
  AOS.init({
    duration: 9000,
    once: false,
    offset: 100
  });
  document.documentElement.classList.add('dark');
}, []);

const toggleDarkMode =()=>{
  const newMode = !darkMode;
  setDarkMode(newMode);
  document.documentElement.classList.toggle('dark');
}
  return (

    <div className=
    {
      darkMode? 'bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen'
      : 'bg-linear-to-br from-gray-50 to-blue-50 min-h-screen'
    }
    >
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Project darkMode={darkMode}/>
    </div>
  )
}

export default App