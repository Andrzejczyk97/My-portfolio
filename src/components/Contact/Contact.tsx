import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { TranslateText } from '../LanguageSelector/TranslateText'
export default function Contact() {
    return (
        <section id="contact-section">
            <h1 className="section-heading">
                <TranslateText translationKey='contact.title'/>
            </h1>
            <p>
                <TranslateText translationKey='contact.visit' /> 
                <a href="https://www.linkedin.com/in/tomasz-andrzejczyk-846601235/" target="_blank"> 
                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin 
                </a>
                <a href="https://github.com/Andrzejczyk97/" target="_blank"> 
                    <FontAwesomeIcon icon={faGithub} /> GitHub 
                </a>
            </p>
            <p>
                <TranslateText translationKey='contact.contact' />
                <a href="mailto:andrzejczyk.tomasz@hotmail.com"> <FontAwesomeIcon icon={faEnvelope} /> <TranslateText translationKey='contact.mail' /> </a>
                <a href="tel:+48733654941"> <FontAwesomeIcon icon={faPhone} /> <TranslateText translationKey='contact.tel' /> </a> 
            </p>
            
                
               
            
        </section>
    )
}