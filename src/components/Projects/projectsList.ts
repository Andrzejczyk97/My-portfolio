export type Project = {
    title: {
        en: string,
        pl: string,
    }
    description: {
        en: string,
        pl: string,
    }
    screenshotUrl: string,
    url: string,
    githubUrl: string,
}
// to add a project to the App, simply add an array element at the end.
export const projectsContainer: Project[] = [
    {
        title: {
            en: "zDechy.pl",
            pl: "zDechy.pl",
        },
        description: {
            en: `This website was created for the needs of my business,
             where in my free time I create and sell wooden furniture. 
             I took care of both design and execution here. 
             The site was built on the Bootstrap 5 framework using some JS.`,
            pl: `Ta strona powstała na potrzeby mojej działalności gospodarczej
             w ramach której w wolnych chwilach tworzę i sprzedaję drewniane meble.
              Zająłem się tutaj zarówno projektem jak i wykonaniem. Witryna została
               zbudowana w oparciu o framework Bootstrap 5.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/zdechy.jpg",
        url: "https://zdechy.pl/",
        githubUrl: "",
    },
    {
        title: {
            en: "This portfolio site",
            pl: "Strona portfolio",
        },
        description: {
            en: `This website is a TypeScript React App. It uses Language Context for
                the needs of translation. It's pretty simple, does its job and is responsive :)`,
            pl: `Ta strona to aplikacja React napisana w TypeScript. Jest prosta, 
            ale spełnia swoją funkcję i jest responsywna.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/Portfolio.jpg",
        url: "https://zdechy.pl/",
        githubUrl: "https://zdechy.pl/",
    },
    {
        title: {
            en: "Simple JavaScript Calculator.",
            pl: "Prosty Kalkulator JavScript.",
        },
        description: {
            en: `A calculator written in JavaScript. In addition to performing actions,
             it saves the history of performed actions and allows you to clear it.`,
            pl: `Kalkulator napisany w JavaScript, oprócz wykonywania działań zapisuje
             historie wykonanych działań oraz umożliwia jej wyczyszczenie.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/kalkulator.jpg",
        url: "https://srv43823.seohost.com.pl/kalkulator.html",
        githubUrl: "",
    },
    {
        title: {
            en: "Simple CSS Login Form",
            pl: "Prosta strona logowania",
        },
        description: {
            en: `A simple login form page with clear interface.`,
            pl: `Prosta strona logowania z przejrzystym interfejsem.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/loginForm.jpg",
        url: "https://srv43823.seohost.com.pl/form.html",
        githubUrl: "",
    },

    {
        title: {
            en: "Tic Tac Toe",
            pl: "Kółko i krzyżyk",
        },
        description: {
            en: `I originally wrote this project in a playable console version
             in C++ during a lecture in my first studies. Years later, practicing
              the use of JavaScript, I decided to come back to it and rewrite it to JS. 
              The program indicates who starts and whose turn it is. The board is checked
               after each move. If one of the players wins, a message is shown. If no one 
               wins, a draw message is displayed.`,
            pl: `Ten projekt pierwornie napisałem w wersji grywalnej w konsoli, w języku
             C++ podczas wykładu na swoich pierwszych studiach. Po latach, ćwicząc używanie
              języka JavaScript postanowiłem wrócić do niego i przepisać go do JS. Program 
              wskazuje kto zaczyna oraz czyja jest kolej. Po każdym ruchu plansza jest 
              sprawdzana. W przypadku wygranej któregoś z graczy pokazywany jest komunikat. 
              Jeżeli nikt nie wygra wyświetlany jest komunikat o remisie.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/kolkoKrzyzykMulti.jpg",
        url: "https://srv43823.seohost.com.pl/ticTacToeMultiplayer.html",
        githubUrl: "",
    },
    {
        title: {
            en: "Singleplayer Tic Tac Toe",
            pl: "Kółko i krzyżyk dla jednej osoby",
        },
        description: {
            en: `Tic-tac-toe single-player version. Game against the computer. 
            Programmed in such a way that winning is not possible. You can try, but You cannot win :)`,
            pl: `Kółko i krzyżyk w wersji dla jednego gracza. Gra przeciwko komputerowi.
             Zaprogramowane w taki sposób, aby wygrana nie była możliwa. Przekonaj się :)`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/kolkoKrzyzykSingle.jpg",
        url: "https://srv43823.seohost.com.pl/ticTacToeSingleplayer.html",
        githubUrl: "",
    },
    {
        title: {
            en: "Animated CSS graphic",
            pl: "Animowana grafika CSS",
        },
        description: {
            en: `Animated picture of a penguin, made using only CSS.`,
            pl: `Animowany obrazek przedstawiający pingwina wykonany przy pomocy CSS`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/penguin.jpg",
        url: "https://srv43823.seohost.com.pl/penguin.html",
        githubUrl: "",
    },
]