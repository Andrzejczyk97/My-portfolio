import { useContext } from "react";
import { LanguageContext } from "../LanguageContext/LanguageContext";
import { projectsContainer } from "./projectsList";
import { TranslateText } from "../LanguageSelector/TranslateText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
export default function Projects() {
    const {currentLanguage} = useContext(LanguageContext);
    const projects = projectsContainer.map((project) => (
        <>
            <div className="project-box">
                <img src={project.screenshotUrl} alt={`Screenshot of ${project.title[currentLanguage]} site.`} />
                <div className="description">
                    <h3>{project.title[currentLanguage]}</h3>
                    <p> {project.description[currentLanguage]} </p>
                    <div className="links">
                        {project.githubUrl!="" ? <a href={project.githubUrl} target="_blank" className="linkElement">
                            <p><TranslateText translationKey="links.github"/></p>
                            <FontAwesomeIcon icon={faGithub} size="4x" />
                        </a> : null}
                        <a href={project.url} target="_blank" className="linkElement">
                            <p><TranslateText translationKey="links.online"/></p>
                            <FontAwesomeIcon icon={faGlobeAmericas} size="4x" />
                        </a>
                        
                    </div>
                    <a href={project.url} target="_blank"></a>
                </div>
            </div>
            <hr></hr>
        </>
    ))
    return(
        <section id="projects-section">
            <h1 className="section-heading"> <TranslateText translationKey="projects.title"/> </h1>
            <div className="projects-container">
                {projects}
            </div>
        </section>
    )
}