import './App.css';
import Navbar from './components/Navbar/Navbar';
import SkillStack from './components/SkillsStack/SkillStack';
import AboutMe from './components/AboutMe/AboutMe';
import { LanguageProvider } from './components/LanguageContext/LanguageContext';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <>
      <LanguageProvider>
        <Navbar/>
        <AboutMe/>
        <SkillStack/>
        <Projects/>
        <Contact/>
      </LanguageProvider>
    </>
  );
}

export default App;
