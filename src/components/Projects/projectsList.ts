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
            en: "3D SLOTS - TypeScript Bootcamp final project",
            pl: "3D SLOTS - projekt końcowy na TypeScript Bootcamp",
        },
        description: {
            en: `A game developed as a course project during Evolution's Typescript bootcamp. 
            A 3D game created using Babylon.js as a game core, for 3d graphics and sounds and Pixi.js for te User Interface.
            You can walk around the scene with W, S, A, D, toggle game mode with C. 
            You can interact with the machine or the radio by clicking it. The user interface will be shown in game mode or when player is close to the machine. 
            Find out more about the game in readme on GitHub :)`,
            pl: `Gra opracowana jako projekt końcowy podczas bootcampu TypeScript firmy Evolution.
            Gra 3D stworzona przy użyciu Babylon.js jako silnika gry do grafiki 3D i dźwięków oraz Pixi.js do interfejsu użytkownika.
            Możesz chodzić po scenie za pomocą W, S, A, D, przełączać tryb gry za pomocą C.
            Możesz wejść w interakcję z maszyną lub radiem, klikając je. Interfejs użytkownika zostanie wyświetlony w trybie gry lub gdy gracz znajduje się blisko maszyny.
            Dowiedz się więcej o grze w readme na GitHub :)`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/3dSlots.jpg",
        url: "https://3d-slots.surge.sh/",
        githubUrl: "https://github.com/Andrzejczyk97/Evolution-course-work",
    },
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
        url: "https://andrzejczyk-portfolio.surge.sh/",
        githubUrl: "https://github.com/Andrzejczyk97/My-portfolio",
    },
    {
        title: {
            en: "Bob's List - Admin Page",
            pl: "Bob's List - Admin Page",
        },
        description: {
            en: `Project developed as one of homeworks  Evolution's 2023 TypeScript Bootcamp. In this task, 
            I had to create an admin site for adding notes to Bob's list (the previous project - check below). 
            The admin panel consists of two main areas: a list of notes and an add note form. My job was to implement 
            the functionality to add and remove notes and display any errors if the update or add request fails. 
            Additionally, had to make the App available in both English and Spanish, so I had to implement the translation 
            engine using React Context. I was provided a network service called NetworkHandler to handle store, modify 
            and retrieve data. I needed to use the provided React hook (network/useRequest.ts) to use this service. 
            To give the app a more professional look, I also had to implement a loading screen that displays while any 
            network request is pending. I also implemented sounds on click.`,
            pl: `Projekt opracowany jako jedna z prac domowych na TypeScript Bootcamp Evolution 2023. W tym zadaniu musiałem 
            utworzyć stronę administracyjną do dodawania notatek do listy Boba (poprzedni projekt - patrz poniżej). 
            Panel administracyjny składa się z dwóch głównych obszarów: listy notatek oraz formularza dodawania notatek.
             Moim zadaniem było zaimplementowanie funkcjonalności dodawania i usuwania notatek oraz wyświetlania błędów w przypadku 
             niepowodzenia aktualizacji lub dodania. Dodatkowo musiałem zapewnić działanie aplikacji zarówno w języku angielskim, 
             jak i hiszpańskim, więc musiałem zaimplementować silnik tłumaczeniowy za pomocą React Context. 
             Dostarczono mi usługę sieciową o nazwie NetworkHandler do obsługi przechowywania, modyfikowania i pobierania danych.
              Musiałem użyć dostarczonego hooka React (network/useRequest.ts), aby skorzystać z tej usługi. 
              Musiałem również zaimplementować ekran ładowania, który wyświetla się, gdy oczekujące żądanie sieciowe. 
              Zaimplementowałem również dźwięki po kliknięciu.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/bob_s-list-admin.jpg",
        url: "https://bobs-list-admin.surge.sh/",
        githubUrl: "https://github.com/Andrzejczyk97/Bob-s-List-Admin",
    },
    {
        title: {
            en: "Bob's List",
            pl: "Bob's List",
        },
        description: {
            en: `Project developed as one of homeworks  Evolution's 2023 TypeScript Bootcamp. In this task,
             I had to fix the app that displays a list of cities, favourite dishes, and the average
              grade for food in each city. The random notes are added constantly by the app. The app stores 
              all data in window.NotesStorage. I needed to modify the city filter and list ordering selector to 
              work correctly. Additionally, I had to ensure that the list was updated when a city is added 
              multiple times, and handle cases where the data about a city may be incorrect.`,
            pl: `Projekt opracowany jako jedna z prac domowych na TypeScript Bootcamp Evolution 2023. W tym zadaniu
             musiałem naprawić aplikację wyświetlającą listę miast, ulubione potrawy i średnią ocenę jedzenia w 
             każdym mieście. Losowe notatki są stale dodawane przez aplikację. Aplikacja przechowuje wszystkie 
             dane w window.NotesStorage. Musiałem zmodyfikować filtr miasta i selektor kolejności na liście, aby działały
              poprawnie. Dodatkowo musiałem zadbać o to, aby lista była aktualizowana przy wielokrotnym dodawaniu 
              miasta oraz obsługiwać przypadki, w których dane o mieście mogą być nieprawidłowe.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/bob_s-list.jpg",
        url: "https://bobs-list.surge.sh/",
        githubUrl: "https://github.com/Andrzejczyk97/Bob-s-List",
    },
    {
        title: {
            en: "Redux - Bingo Game",
            pl: "Gra Bingo - Redux",
        },
        description: {
            en: `This is a Bingo game, developed as a Redux homework during Evolution's 2023 TypeScript Bootcamp
            I had to develop Redux store and reducer to implement Bingo game logic, and connect that to the UI.`,
            pl: `Gra Bingo. Projekt stworzony jako praca domowa podczas Bootcampu Evolution TypeScript. Moim zadaniem
             było stworzenie reducera, w którym zaimplementowana będzie logika gry w Bingo oraz połączenie tego z UI.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/redux-bingo.jpg",
        url: "https://redux-bingo.surge.sh/",
        githubUrl: "https://github.com/Andrzejczyk97/Redux-bingo",
    },
    {
        title: {
            en: "Bubble sort visualisation",
            pl: "Wizualizacja sortowania bąbelkowego",
        },
        description: {
            en: `In this TypeScript React App i implemented a bubble sort algorithm. You can run it, stop at any moment,
             or run step by step. You can also change the sorting steps latency, and the length of random array.`,
            pl: `W tej aplikacji TypeScript React zaimplementowałem algorytm sortowania bąbelkowego. Możesz go uruchomić,
             zatrzymać w dowolnym momencie lub uruchomić krok po kroku. Możesz także zmienić opóźnienie kroków sortowania i długość losowej tablicy.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/bubble-sort.jpg",
        url: "https://bubble-sort-visualised.surge.sh/",
        githubUrl: "https://github.com/Andrzejczyk97/Bubble-sort",
    },
    {
        title: {
            en: "Hexagonal 2048 game",
            pl: "Sześciokątna gra 2048",
        },
        description: {
            en: `This game is the first thing I've created in React. It was a entry task for the Bootcamp. 
            It is a 2048 game on a hexagonal grid. Try to play! Use Q, W, E, A, S, D for steering.
            It uses a custom API for generating new numbers in random fields.`,
            pl: `Ta gra jest pierwszą aplikacją, którą stworzyłem w React. Została stworzona jako zadanie wstępne do Bootcampu. 
             Jest to gra 2048 na sześciokątnej siatce. Spróbuj zagrać! Użyj Q, W, E, A, S, D do sterowania.
            Wykorzystuje niestandardowy interfejs API do generowania nowych liczb w losowych polach.`,
        },
        screenshotUrl: "https://srv43823.seohost.com.pl/hex2048.jpg",
        url: "https://andrzejczyk2048hex.surge.sh/",
        githubUrl: "",
    },
    {
        title: {
            en: "Simple JavaScript Calculator.",
            pl: "Prosty Kalkulator JavaScript.",
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