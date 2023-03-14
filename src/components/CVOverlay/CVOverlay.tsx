import React, { useCallback } from "react";
import { createPortal } from "react-dom";
import "./CVOverlay.css";
import { TranslateText } from "../LanguageSelector/TranslateText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faClose} from "@fortawesome/free-solid-svg-icons";
interface CVOverlayProps {
    isVisible: boolean;
    setisVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
// todo: render this overlay as a portal to a div with id "loading-overlay" (index.html, line 32)

export const CVOverlay: React.FC<CVOverlayProps> = ({ isVisible, setisVisible }) => {
    const portalContainer = document.getElementById("cv-overlay") as HTMLElement;
    const closeOverlay = useCallback(() => {
        setisVisible(false);
    },[])
    return isVisible
        ? createPortal((
        <>
            <div className="overlayBackground" onClick={closeOverlay}> </div>
            <div className="cvBanner">
                <div className="closeOverlay" onClick={closeOverlay}> <FontAwesomeIcon icon={faClose}/> </div>
                <h1> <TranslateText translationKey="cvOverlay.h1"/> </h1>
                <p> <TranslateText translationKey="cvOverlay.text"/> </p>
                <a href="/Tomasz_Andrzejczyk_CV.pdf" className="downloadAnchor" download> <FontAwesomeIcon icon={faDownload}/> <TranslateText translationKey="cvOverlay.download"/> </a>
            </div>
        </>
        ), portalContainer)
        : null;
};
