import { TranslateText } from "../LanguageSelector/TranslateText"

export default function AboutMe() {
    return (
        <div id="about-section">
            <h1 className="section-heading">About me</h1>
            <div className="about-container">
                <div className="message my-information">
                    <img src="https://zdechy.pl/omnie.jpg" alt="Photo of site owner."/>
                    <p>
                        <TranslateText translationKey="about.name"/>
                    </p>
                    <p>
                        <TranslateText translationKey="about.p1.1"/>  <br></br>
                        <TranslateText translationKey="about.p1.2"/>  <br></br>
                        <TranslateText translationKey="about.p1.3"/>
                    </p>
                    <p>    
                        <TranslateText translationKey="about.p2"/>
                    </p>
                    <p>
                        <TranslateText translationKey="about.p3"/>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}