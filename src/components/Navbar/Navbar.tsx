import LangSelector from "../LanguageSelector/LangSelector"
import { TranslateText } from '../LanguageSelector/TranslateText';

export default function Navbar() {

    return (
        <section id="navbar">
            <LangSelector/>
            <ul>
                <li><a href="#about-section"><TranslateText translationKey="navbar.about" /></a></li>
                <li><a href="#skills-section"><TranslateText translationKey="navbar.skills" /></a></li>
                <li><a href="#projects-section"><TranslateText translationKey="navbar.projects" /></a></li>
                <li><a href="#contact-section"><TranslateText translationKey="navbar.contact" /></a></li>
            </ul>
        </section>
    )
}