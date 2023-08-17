import LangSelector from "../LanguageSelector/LangSelector"
import { TranslateText } from '../LanguageSelector/TranslateText';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
export default function Navbar() {
    const [navsVisible, setNavsVisible] = useState(false);
    
    const showBars = () => {
        console.log("resize")
        const queryWidth = window.matchMedia("(min-width: 700px)").matches;
        if(queryWidth) {
            setNavsVisible(true)
        } else {
            setNavsVisible(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("resize", showBars)
    },[])

    const barsClick = () => {
        console.log("click")
        setNavsVisible(prevNavsVisible => !prevNavsVisible);
    };

    const liClick = () => {
        if (window.outerWidth<700) {
            barsClick();
        }
    }

    return (
        <section id="navbar">
            <div onClick={barsClick}><FontAwesomeIcon className="barsIcon" icon={faBars} size="2x" /></div>
            {navsVisible &&
                <>
                    <LangSelector/>
                    <ul id="navbarList">
                        <li><a onClick={liClick} href="#about-section"><TranslateText translationKey="navbar.about" /></a></li>
                        <li><a onClick={liClick} href="#skills-section"><TranslateText translationKey="navbar.skills" /></a></li>
                        <li><a onClick={liClick} href="#projects-section"><TranslateText translationKey="navbar.projects" /></a></li>
                        <li><a onClick={liClick} href="#contact-section"><TranslateText translationKey="navbar.contact" /></a></li>
                    </ul>
                </>
            }
            
        </section>
    )
}