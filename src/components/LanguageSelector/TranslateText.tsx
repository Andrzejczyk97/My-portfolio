import React, { useContext } from "react";
import { TranslationKey, TRANSLATIONS } from "./translations";
import { LanguageContext } from "../LanguageContext/LanguageContext";

interface TranslateTextProps {
    translationKey: TranslationKey;
}

export const TranslateText: React.FC<TranslateTextProps> = ({ translationKey }) => {
    const { currentLanguage } = useContext(LanguageContext);
    const translated = TRANSLATIONS[currentLanguage][translationKey];

    return (
        <span>{translated}</span>
    );
};
