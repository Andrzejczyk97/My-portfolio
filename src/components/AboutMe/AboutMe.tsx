import { TranslateText } from "../LanguageSelector/TranslateText"

export default function AboutMe() {
    return (
        <div id="about-section">
            <h1 className="section-heading"><TranslateText translationKey="about.title"/></h1>
            <div className="about-container">
                <div className="message my-information">
                    <img src="https://zdechy.pl/omnie.jpg" alt="Photo of site owner."/>
                    <p><TranslateText translationKey="about.p1"/></p>                    
                    <p><TranslateText translationKey="about.p2"/></p>                    
                    <p><TranslateText translationKey="about.p3"/></p>                    
                </div>
            </div>
        </div>
    )
}