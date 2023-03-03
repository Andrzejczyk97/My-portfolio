import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faJs, faCss3, faBootstrap, faWordpress, faReact } from '@fortawesome/free-brands-svg-icons'
import { TranslateText } from '../LanguageSelector/TranslateText';
export default function SkillStack() {
    return (
        <section id="skills-section">
            <h1 className="section-heading"> <TranslateText translationKey='skills.title'/> </h1>
            <div className="skills-container"> 
                <div className="skill-information">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968421.png" style={{height: "92px"}} alt="" />
                    <p className="skill-name"> TypeScript </p>                  
                </div>
                 <div className="skill-information">
                 <p> <FontAwesomeIcon icon={faJs} size="4x" /> </p>
                    <p className="skill-name">JavaScript</p>
    
                </div>
                <div className="skill-information">
                <p> <FontAwesomeIcon icon={faReact} size="4x" /> </p>
                    <p className="skill-name"> React </p>                  
                </div>
                <div className="skill-information">
                    <p> <FontAwesomeIcon icon={faHtml5} size="4x" /> </p>
                    <p className="skill-name"> HTML5 </p>
                   
                </div>
                <div className="skill-information">
                <p> <FontAwesomeIcon icon={faCss3} size="4x" /> </p>
                    <p className="skill-name">CSS3</p>
                   
                </div>
                <div className="skill-information">
                <p> <FontAwesomeIcon icon={faBootstrap} size="4x" /> </p>
                    <p className="skill-name">Bootstrap</p>
                 
                </div>
                <div className="skill-information">
                <p> <FontAwesomeIcon icon={faWordpress} size="4x" /> </p>
                    <p className="skill-name"> Wordpress </p>
                 
                </div>
                
            </div> 
        </section>
    )
}