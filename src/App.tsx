import './App.css';
import Navbar from './components/Navbar/Navbar';
import SkillStack from './components/SkillsStack/SkillStack';
import AboutMe from './components/AboutMe/AboutMe';
import { LanguageProvider } from './components/LanguageContext/LanguageContext';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import { CVOverlay } from './components/CVOverlay/CVOverlay';
import { useState } from 'react';
function App() {
  const [isVisible, setisVisible] = useState(false);
  
  document.addEventListener('mouseleave', function (event) {
    var mouseY = event.clientY;
    if (mouseY < 0) {
    setisVisible(true);
    }
  });
  let prevScrollPosition = window.pageYOffset;

  window.addEventListener('scroll', function() {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > prevScrollPosition) {
      let documentHeight = document.documentElement.scrollHeight;
      let windowHeight = window.innerHeight;
      if (Math.ceil(currentScrollPosition) + windowHeight >= documentHeight) {
        setisVisible(true);
      }
    }
    prevScrollPosition = currentScrollPosition;
  });
  
  return (
    <>
      <LanguageProvider>
        <Navbar/>
        <AboutMe/>
        <SkillStack/>
        <Projects/>
        <Contact/>
        <CVOverlay isVisible={isVisible} setisVisible={setisVisible} />
      </LanguageProvider>
    </>
  );
}

export default App;
