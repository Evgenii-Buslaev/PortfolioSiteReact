import { useRef } from "react";

import styles from "../css/Item.module.css";

function Item({ name, click, link, image }) {
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
    <a
      className={styles.item}
      target="_blank"
      href={link}
      ref={element}
      rel="noreferrer"
      onClick={click}
      onMouseEnter={() => addBackground(element)}
      onMouseLeave={() => deleteBackground(element)}
    >
      <h3>{name}</h3>
    </a>
  );
}

export default Item;
