import { useRef } from "react";

import styles from "../css/Item.module.css";

function Item({ mode, name, click, deploy, code, image }) {
  const element = useRef(null);

  function addBackground(elem) {
    elem.current.style.backgroundImage = `url(${image})`;
    elem.current.style.backgroundSize = "contain";
    elem.current.style.opacity = "0.5";
  }

  function deleteBackground(elem) {
    elem.current.style.backgroundImage = "none";
    elem.current.style.backgroundSize = "none";
    elem.current.style.opacity = "1";
  }

  return (
    <div
      className={
        mode === "dark"
          ? styles.itemCont
          : `${styles.itemCont} ${styles.itemContLight}`
      }
    >
      <a
        className={styles.item}
        target="_blank"
        href={deploy}
        ref={element}
        rel="noreferrer"
        onClick={click}
        onMouseEnter={() => addBackground(element)}
        onMouseLeave={() => deleteBackground(element)}
      >
        <h3>{name}</h3>
      </a>
      {code ? (
        <a
          className={styles.codeButton}
          href={code}
          rel="noreferrer"
          target="_blank"
        >
          Исходный код
        </a>
      ) : null}
    </div>
  );
}

export default Item;
