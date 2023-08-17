import { Language } from "../LanguageContext/LanguageContext";

const TRANSLATION_KEYS = [
    "navbar.about",
    "navbar.skills",
    "navbar.projects",
    "navbar.contact",
    "about.title",
    "about.p1",
    "about.p2",
    "about.p3",
    "skills.title",
    "skills.description",
    "projects.title",
    "links.github",
    "links.online",
    "contact.title",
    "contact.visit",
    "contact.contact",
    "contact.mail",
    "contact.tel",
    "cvOverlay.h1",
    "cvOverlay.text",
    "cvOverlay.download",
] as const;

type KeyTuple = typeof TRANSLATION_KEYS;
export type TranslationKey = KeyTuple[number];

export function isTranslationKey(key: TranslationKey): key is TranslationKey {
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
        "about.p1": "Hi there! I'm Tomasz Andrzejczyk, a programming enthusiast with a passion for logical thinking and problem-solving. My journey with programming began in high school. On my first studies I excelled in C++. After earning a degree in forestry engineering, I returned to my true passion and delved into the world of web development with HTML, CSS, and JavaScript.",
        "about.p2": "As an analytical and detail-oriented thinker, I'm always striving to expand my knowledge and skills. I've just finished a four-month TypeScript Bootcamp with Evolution, a leading provider of live casino systems. Under the guidance of experienced programmers, I've been learning new tools, frameworks, and libraries like TypeScript, React, Redux, Babylon.js, Pixi.js and more.",
        "about.p3": "If you're looking for a driven, curious, and highly skilled programmer, I'm your guy! Let's work together to build something amazing.",
        "skills.title": "My skills stack",
        "skills.description" : "As a front-end developer, I possess the skills needed to create interactive and aesthetically pleasing user interfaces for websites and web applications, including browser-based games. I am proficient in both JavaScript and TypeScript and can use them interchangeably. I utilize Redux and MobX libraries for managing application state, including game states. Working with Bootstrap, I create scalable projects that are easy to maintain and maintain a consistent style. Additionally, I have experience designing and developing responsive websites.",
        "projects.title": "My projects:",
        "links.github": "See it on GitHub:",
        "links.online": "Check it online:",
        "contact.title": "Let's work together! I'm open for work offers.",
        "contact.visit": "Visit my profile on: ",
        "contact.contact": "Contact me by: ",
        "contact.mail": "Email",
        "contact.tel": "Telephone",
        "cvOverlay.h1": "Get to know me better!",
        "cvOverlay.text": "As a junior developer, I'm passionate about programming and committed to honing my craft. Download my CV to learn more about my education, projects, and skills. Thanks for your interest!",
        "cvOverlay.download": "Download CV",
    },
    pl: {
        "navbar.about": 'O mnie',
        "navbar.skills": "Umiejętności",
        "navbar.projects": "Projekty",
        "navbar.contact": "Kontakt",
        "about.title": "O mnie",
        "about.p1": "Cześć! Jestem Tomasz Andrzejczyk, entuzjasta programowania z pasją do logicznego myślenia i rozwiązywania problemów. Moja przygoda z programowaniem zaczęła się w liceum. Na pierwszych studiach wyróżniałem się w C++. Po uzyskaniu stopnia inżyniera leśnictwa, powróciłem do mojej prawdziwej pasji i zagłębiłem się w świat tworzenia stron internetowych przy użyciu HTML, CSS i JavaScript.",
        "about.p2": "Jako myśliciel analityczny i zorientowany na szczegóły, zawsze dążę do poszerzania mojej wiedzy i umiejętności. Właśnie ukończyłem cztero-miesięczny Bootcamp TypeScript z Evolution, wiodącym dostawcą systemów kasynowych na żywo. Pod opieką doświadczonych programistów uczyłem się nowych narzędzi, frameworków i bibliotek, takich jak TypeScript, React, Redux, Babylon.js, Pixi.js i wiele innych.",
        "about.p3": "Jeśli poszukujesz programisty, który jest zdeterminowany, ciekawski i utalentowany w swoim fachu, to właśnie mnie potrzebujesz! Stwórzmy razem coś niesamowitego.",
        "skills.title": "Moje umiejętności",
        "skills.description": "Jako programista front-end, posiadam umiejętności potrzebne do tworzenia interaktywnych i estetycznych interfejsów użytkownika dla stron internetowych i aplikacji internetowych, w tym gier przeglądarkowych. Znam zarówno JavaScript, jak i TypeScript i potrafię używać ich na równi. Wykorzystuję biblioteki Redux i MobX do zarządzania stanem aplikacji, w tym gier. Pracując z Bootstrapem, tworzę skalowalne projekty, które są łatwe w obsłudze i zachowują spójny styl. Oprócz tego, posiadam doświadczenie w projektowaniu i tworzeniu responsywnych stron internetowych.",
        "projects.title": "Moje projekty:",
        "links.github": "Zobacz na GitHub:",
        "links.online": "Sprawdź online:",
        "contact.title": "Jestem otwarty na współpracę. Zapraszam do kontaktu :)",
        "contact.visit": "Odwiedź mój profil na: ",
        "contact.contact": "Skontaktuj się ze mną: ",
        "contact.mail": "Mailowo",
        "contact.tel": "Telefonicznie",
        "cvOverlay.h1": "Chciałbym się lepiej przedstawić!",
        "cvOverlay.text": "Jako początkujący programista, jestem pasjonatem programowania i poświęcam wiele czasu na doskonalenie swoich umiejętności. Jeśli chcesz dowiedzieć się więcej o moim wykształceniu, projektach oraz umiejętnościach, zapraszam do pobrania mojego CV. Dziękuję za zainteresowanie moją osobą!",
        "cvOverlay.download": "Pobierz CV",
    },
};
