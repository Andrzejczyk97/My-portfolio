import React, { MouseEventHandler, useContext } from "react";
import { LanguageContext, Language} from "../LanguageContext/LanguageContext"; 

const langToFlagMap: Record<Language, string> = {
    en: "EN",
    pl: "PL",
};

export default function LangSelector() {
    const { toggleLanguage, currentLanguage } = useContext(LanguageContext);
    const langToOffset = () => {
        if (currentLanguage=="en") return "30px"
        else return "0px"
    }
    const click: MouseEventHandler<HTMLDivElement> = (e) => {
        const offset = langToOffset();
        e.currentTarget.style.left=offset;
        const parent = e.currentTarget.parentElement as HTMLDivElement;
        parent.style.backgroundColor= currentLanguage=="en"? "orange" : "lightgray"
        toggleLanguage();
    }
    return (
        <div id="langBox" >
            <div id="langCurrent" onClick={click}> {langToFlagMap[currentLanguage]}</div>
        </div>
    )
}