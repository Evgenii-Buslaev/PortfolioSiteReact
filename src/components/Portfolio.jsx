import { useState } from "react";
import Item from "../components/Item";

import styles from "../css/Portfolio.module.css";

function Portfolio() {
  const store = {
    portfolio: {
      header: "Портфолио",
      content: [
        "Верстка",
        "JavaScript-приложения",
        "React-приложения",
        "Алгоритмы",
      ],
    },
    layout: {
      header: "Верстка сайтов",
      content: ["Лендинг", "Карточка товара"],
    },
    javascript: {
      header: "JavaScript-приложения",
      content: ["Помодоро-таймер", "Секундомер"],
    },
    react: {
      header: "React-приложения",
      content: ["Заметки", "Поиск фильмов"],
    },
    algoritmics: { header: "Алгоритмы", content: ["Codewars-задачи"] },
  };

  const { portfolio, layout, javascript, react, algoritmics } = store;
  const [header, setHeader] = useState(portfolio.header);
  const [items, setItems] = useState(portfolio.content);

  function openDiractory(name) {
    switch (name) {
      case "Верстка":
        setItems(layout.content);
        setHeader(layout.header);
        break;
      case "JavaScript-приложения":
        setItems(javascript.content);
        setHeader(javascript.header);
        break;
      case "React-приложения":
        setItems(react.content);
        setHeader(react.header);
        break;
      case "Алгоритмы":
        setItems(algoritmics.content);
        setHeader(algoritmics.header);
        break;
      default:
        getBack();
    }
  }

  function getBack() {
    setItems(portfolio.content);
    setHeader(portfolio.header);
  }

  return (
    <>
      <h1 className={styles.portfolioHeader}>{header}</h1>
      <div className={styles.portfolioCont}>
        {items !== portfolio.content ? (
          <button onClick={getBack}>Назад</button>
        ) : null}
        {items.map((item) => (
          <Item name={item} key={item} click={() => openDiractory(item)} />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
