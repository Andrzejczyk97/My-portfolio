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
    "projects.title",
    "links.github",
    "links.online",
    "contact.title",
    "contact.findMe",
    "contact.contact",
    "contact.tel",
    "cvOverlay.h1",
    "cvOverlay.text",
    "cvOverlay.download",
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
        "about.p1": "Hi there! I'm Tomasz Andrzejczyk, a programming enthusiast with a passion for logical thinking and problem-solving. My journey with programming began in high school. On my first studies I excelled in C++. After earning a degree in forestry engineering, I returned to my true passion and delved into the world of web development with HTML, CSS, and JavaScript.",
        "about.p2": "As an analytical and detail-oriented thinker, I'm always striving to expand my knowledge and skills. Currently, I'm honing my expertise through a four-month TypeScript Bootcamp with Evolution, a leading provider of live casino systems. Under the guidance of experienced programmers, I'm learning new tools, frameworks, and libraries like TypeScript, React, Redux, and more.",
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
        "navbar.skills": "Umiej??tno??ci",
        "navbar.projects": "Projekty",
        "navbar.contact": "Kontakt",
        "about.title": "O mnie",
        "about.p1": "Cze????! Jestem Tomasz Andrzejczyk, entuzjasta programowania z pasj?? do logicznego my??lenia i rozwi??zywania problem??w. Moja przygoda z programowaniem zacz????a si?? w liceum. Na pierwszych studiach wyr????nia??em si?? w C++. Po uzyskaniu stopnia in??yniera le??nictwa, powr??ci??em do mojej prawdziwej pasji i zag????bi??em si?? w ??wiat tworzenia stron internetowych przy u??yciu HTML, CSS i JavaScript.",
        "about.p2": "Jako my??liciel analityczny i zorientowany na szczeg????y, zawsze d?????? do poszerzania mojej wiedzy i umiej??tno??ci. Obecnie doskonal?? swoje do??wiadczenie poprzez cztero-miesi??czny Bootcamp TypeScript z Evolution, wiod??cym dostawc?? system??w kasynowych na ??ywo. Pod opiek?? do??wiadczonych programist??w ucz?? si?? nowych narz??dzi, framework??w i bibliotek, takich jak TypeScript, React, Redux i wiele innych.",
        "about.p3": "Je??li poszukujesz programisty, kt??ry jest zdeterminowany, ciekawski i utalentowany w swoim fachu, to w??a??nie mnie potrzebujesz! Stw??rzmy razem co?? niesamowitego.",
        "skills.title": "Moje umiej??tno??ci",
        "skills.description": "Jako programista front-end, posiadam umiej??tno??ci potrzebne do tworzenia interaktywnych i estetycznych interfejs??w u??ytkownika dla stron internetowych i aplikacji internetowych, w tym gier przegl??darkowych. Znam zar??wno JavaScript, jak i TypeScript i potrafi?? u??ywa?? ich na r??wni. Wykorzystuj?? biblioteki Redux i MobX do zarz??dzania stanem aplikacji, w tym gier. Pracuj??c z Bootstrapem, tworz?? skalowalne projekty, kt??re s?? ??atwe w obs??udze i zachowuj?? sp??jny styl. Opr??cz tego, posiadam do??wiadczenie w projektowaniu i tworzeniu responsywnych stron internetowych.",
        "projects.title": "Moje projekty:",
        "links.github": "Zobacz na GitHub:",
        "links.online": "Sprawd?? online:",
        "contact.title": "Jestem otwarty na wsp????prac??. Zapraszam do kontaktu :)",
        "contact.visit": "Odwied?? m??j profil na: ",
        "contact.contact": "Skontaktuj si?? ze mn??: ",
        "contact.mail": "Mailowo",
        "contact.tel": "Telefonicznie",
        "cvOverlay.h1": "Chcia??bym si?? lepiej przedstawi??!",
        "cvOverlay.text": "Jako pocz??tkuj??cy programista, jestem pasjonatem programowania i po??wi??cam wiele czasu na doskonalenie swoich umiej??tno??ci. Je??li chcesz dowiedzie?? si?? wi??cej o moim wykszta??ceniu, projektach oraz umiej??tno??ciach, zapraszam do pobrania mojego CV. Dzi??kuj?? za zainteresowanie moj?? osob??!",
        "cvOverlay.download": "Pobierz CV",
    },
};
