import LangSelector from "../LanguageSelector/LangSelector"
import { TranslateText } from '../LanguageSelector/TranslateText';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useState } from "react";
export default function Navbar() {
    const [navsVisible, setNavsVisible] = useState(false);
    
    const showBars = () => {
        const queryWidth = window.matchMedia("(min-width: 700px)").matches;
        const list = document.getElementById("navbarList") as HTMLElement;
        const lang = document.getElementById("langBox") as HTMLElement;
        if(queryWidth) {
            list.style.display="flex"
            lang.style.display="flex"
            setNavsVisible(true)
        } else {
            setNavsVisible(false);
            list.style.display="none"
            lang.style.display="none"
        }
    }

    window.addEventListener("resize", showBars)

    const barsClick = useCallback(() => {
        const list = document.getElementById("navbarList") as HTMLUListElement;
        const lang = document.getElementById("langBox") as HTMLElement;
        navsVisible ? list.style.display = "none" : list.style.display = "flex";
        navsVisible ? lang.style.display = "none" : lang.style.display = "flex";
        setNavsVisible(!navsVisible);
    },[navsVisible])

    const liClick = useCallback(() => {
        if (window.outerWidth<700) {
            barsClick();
        }
    },[navsVisible])

    return (
        <section id="navbar">
            <div onClick={barsClick}><FontAwesomeIcon className="barsIcon" icon={faBars} size="2x" /></div>
            <LangSelector/>
            <ul id="navbarList">
                <li><a onClick={liClick} href="#about-section"><TranslateText translationKey="navbar.about" /></a></li>
                <li><a onClick={liClick} href="#skills-section"><TranslateText translationKey="navbar.skills" /></a></li>
                <li><a onClick={liClick} href="#projects-section"><TranslateText translationKey="navbar.projects" /></a></li>
                <li><a onClick={liClick} href="#contact-section"><TranslateText translationKey="navbar.contact" /></a></li>
            </ul>
        </section>
    )
}