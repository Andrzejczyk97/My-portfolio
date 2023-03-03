import { Language } from "../LanguageContext/LanguageContext";

const TRANSLATION_KEYS = [
    "navbar.about",
    "navbar.skills",
    "navbar.projects",
    "navbar.contact",
    "about.title",
    "about.name",
    "about.p1.1",
    "about.p1.2",
    "about.p1.3",
    "about.p2",
    "about.p3",
    "skills.title",
    "projects.title",
    "links.github",
    "links.online",
    "contact.title",
    "contact.findMe",
    "contact.contact",
    "contact.tel",
    
];

type KeyTuple = typeof TRANSLATION_KEYS;
export type TranslationKey = KeyTuple[number];

export function isTranslationKey(key: string): key is TranslationKey {
    return TRANSLATION_KEYS.includes(key);
}

type TranslationsMap = Record<Language, Record<TranslationKey, string>>;

export const TRANSLATIONS: TranslationsMap = {
    en: {
        "navbar.about": 'About Me',
        "navbar.skills": "My skills",
        "navbar.projects": "Projects",
        "navbar.contact": "Contact",
        "about.title": "About me",
        "about.name": "My name is Tomasz Andrzejczyk",
        "about.p1.1": "I've taken my first steps in programming in high school.",
        "about.p1.2": `I developed my knowledge in this field during my first studies, where we used C ++.
                        The topic of programming fascinated me so much that I gave private lessons in this language.`,
        "about.p1.3": `I returned to programming after a few years, in the meantime defending the title of engineer at forestry studies.
                        This time I chose programming in JavaScript and creating pages in HTML and CSS.`,
        "about.p2": `I follow logical thinking, have analytical mind and a highly developed technical sense. 
                        I love to work out the mechanisms and take them apart.`,
        "about.p3": `I am constantly expanding my knowledge, developing my skills and striving for the highest quality. 
                    Currently I am taking part in a four month TypeScript Bootcamp organised by Evolution - the leading provider of live casino systems.
                     There, under the supervision of experienced programmers I'am improving my programming skills, TypeScript, React and many 
                     other tools, frameworks and libraries such like: Redux, MobX, WebGl, Pixi.js, Babylon.js. `,
        "skills.title": "My skills stack",
        "projects.title": "My projects:",
        "links.github": "See it on GitHub:",
        "links.online": "Check it online:",
        "contact.title": "Let's work together! I'm open for work offers.",
        "contact.visit": "Visit my profile on: ",
        "contact.contact": "Contact me by: ",
        "contact.mail": "Email",
        "contact.tel": "Telephone",
    },
    pl: {
        "navbar.about": 'O mnie',
        "navbar.skills": "Umiejętności",
        "navbar.projects": "Projekty",
        "navbar.contact": "Kontakt",
        "about.title": "O mnie",
        "about.name": "Nazywam się Tomasz Andrzejczyk",
        "about.p1.1": "Pierwsze kroki w programowaniu stawiałem już w liceum.",
        "about.p1.2": `Swoją wiedzę w tej dziedzinie rozwijałem podczas pierwszych studiów, gdzie korzystaliśmy z C++.
                    Temat programowania zafascynował mnie na tyle mocno, że udzielałem prywatnych korepetycji z tego języka.`,
        "about.p1.3": `Do programowania wróciłem po kilku latach, w międzyczasie broniąc tytułu inżyniera na studiach leśniczych.
                    Tym razem wybrałem programowanie w JavaScript i tworzenie stron w HTML i CSS.`,
        "about.p2": `Cechuje mnie logiczne myślenie, analityczny umysł oraz wysoko rozwinięty zmysł techniczny. 
                    Uwielbiam rozpracowywać mechanizmy i rozkładać je na części pierwsze.`,
        "about.p3": ` Na bieżąco poszerzam swoją wiedzę, rozwijam swoje umiejętności i dążę do najwyższej jakości. 
        Obecnie biorę udział w czteromiesięcznym TypeScript Bootcamp organizowanym przez Evolution - wiodącego dostawcę 
        systemów do kasyn na żywo. Tam pod okiem doświadczonych programistów doskonalę swoje umiejętności programistyczne,
         TypeScript, React oraz wiele innych narzędzi, frameworków i bibliotek takich jak: Redux, MobX, WebGl, Pixi.js, Babylon.js.`,
        "skills.title": "Moje umiejętności",
        "projects.title": "Moje projekty:",
        "links.github": "Zobacz na GitHub:",
        "links.online": "Sprawdź online:",
        "contact.title": "Jestem otwarty na współpracę. Zapraszam do kontaktu :)",
        "contact.visit": "Odwiedź mój profil na: ",
        "contact.contact": "Skontaktuj się ze mną: ",
        "contact.mail": "Mailowo",
        "contact.tel": "Telefonicznie",
    },
};
