import { useState } from "react";

import Item from "../components/Item";
import { store } from "../store/store";

import styles from "../css/Portfolio.module.css";

const { portfolio, layout, javascript, react, algoritmics } = store;

function Portfolio({ mode }) {
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
        return;
    }
  }

  function getBack() {
    setItems(portfolio.content);
    setHeader(portfolio.header);
  }

  return (
    <>
      <h1
        className={
          mode === "dark"
            ? styles.portfolioHeader
            : `${styles.portfolioHeader} ${styles.portfolioHeaderLight}`
        }
      >
        {header}
      </h1>
      {header !== portfolio.header ? (
        <button className={styles.backButton} onClick={getBack}>
          Назад
        </button>
      ) : null}
      <div className={styles.portfolioCont}>
        {items.map((item) => (
          <Item
            mode={mode}
            name={item.name}
            key={item.name}
            click={() => openDiractory(item.name)}
            deploy={item.deployment || item.code}
            code={item.code}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;
