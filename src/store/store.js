import landingPic from "../images/background/landing.PNG";
import productPic from "../images/background/product-card.PNG";
import pomodoroPic from "../images/background/pomodoro-app.PNG";
import timerPic from "../images/background/timer-app.PNG";
import weatherPic from "../images/background/weather-app.PNG";
import notesJSPic from "../images/background/notes-app.PNG";
import notesReactPic from "../images/background/notes_react.png";
import codewarsPic from "../images/background/codewars.PNG";

export const linksStore = {
  landing: {
    deploy: "https://evgenii-buslaev.github.io/FurnitureLandingPage/",
    code: "https://github.com/Evgenii-Buslaev/FurnitureLandingPage",
  },
  productCard: {
    deploy: "https://evgenii-buslaev.github.io/ProductCard",
    code: "https://github.com/Evgenii-Buslaev/ProductCard",
  },
  pomodoro: {
    deploy: "https://evgenii-buslaev.github.io/PomodoroClockApp/",
    code: "https://github.com/Evgenii-Buslaev/PomodoroClockApp",
  },
  timer: {
    deploy: "https://evgenii-buslaev.github.io/TimerApp/",
    code: "https://github.com/Evgenii-Buslaev/TimerApp",
  },
  weather: {
    deploy: "https://evgenii-buslaev.github.io/WeatherApp/",
    code: "https://github.com/Evgenii-Buslaev/WeatherApp",
  },
  notesJS: {
    deploy: "https://evgenii-buslaev.github.io/NotesApp/src/",
    code: "https://github.com/Evgenii-Buslaev/NotesApp",
  },
  notesReact: {
    deploy: "https://evgenii-buslaev.github.io/NotesAppReact/",
    code: "https://github.com/Evgenii-Buslaev/NotesAppReact",
  },
  codewars: {
    code: "https://github.com/Evgenii-Buslaev/CodewarsKatas",
  },
};

const {
  landing,
  productCard,
  pomodoro,
  timer,
  weather,
  notesJS,
  notesReact,
  codewars,
} = linksStore;

export const store = {
  portfolio: {
    header: "Портфолио",
    content: [
      { name: "Верстка" },
      { name: "JavaScript-приложения" },
      { name: "React-приложения" },
      { name: "Алгоритмы" },
    ],
  },
  layout: {
    header: "Верстка сайтов",
    content: [
      {
        name: "Лендинг",
        deployment: landing.deploy,
        code: landing.code,
        image: landingPic,
      },
      {
        name: "Карточка товара",
        deployment: productCard.deploy,
        code: productCard.code,
        image: productPic,
      },
    ],
  },
  javascript: {
    header: "JavaScript-приложения",
    content: [
      {
        name: "Помодоро-таймер",
        deployment: pomodoro.deploy,
        code: pomodoro.code,
        image: pomodoroPic,
      },
      {
        name: "Секундомер",
        deployment: timer.deploy,
        code: timer.code,
        iamge: timerPic,
      },
      {
        name: "Прогноз погоды",
        deployment: weather.deploy,
        code: weather.code,
        iamge: weatherPic,
      },
      {
        name: "Заметки",
        deployment: notesJS.deploy,
        code: notesJS.code,
        iamge: notesJSPic,
      },
    ],
  },
  react: {
    header: "React-приложения",
    content: [
      {
        name: "Заметки",
        deployment: notesReact.deploy,
        code: notesReact.code,
        image: notesReactPic,
      },
      { name: "Поиск фильмов", deployment: "", code: "", image: null },
    ],
  },
  algoritmics: {
    header: "Алгоритмы",
    content: [
      {
        name: "Codewars-задачи",
        deployment: "",
        code: codewars.code,
        image: codewarsPic,
      },
    ],
  },
};
