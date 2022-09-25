import { useState, useEffect, useRef } from "react";

import ImageButtons from "../UI/ImageButtons";

import styles from "../css/Greeting.module.css";

import dark from "../icons/mode/dark-mode.png";
import light from "../icons/mode/light-mode.png";

function Greeting({ mode, changeMode }) {
  let greetingTextContent = "Добро пожаловать";
  let underTextContent = "на страницу коллекции моих работ";

  const [text, setText] = useState("");
  const [underText, setUnderText] = useState("");

  const underTextRef = useRef(null);
  useEffect(() => {
    setTimeout(
      () => setText(greetingTextContent.slice(0, text.length + 1)),
      125
    );
    if (text.length === greetingTextContent.length) {
      setUnderText(underTextContent);
      underTextRef.current.style.opacity = "1";
    }
  }, [text, greetingTextContent, underTextContent]);

  return (
    <>
      {mode === "dark" ? (
        <ImageButtons
          click={changeMode}
          style={{ top: "5rem", left: "80%" }}
          image={light}
          alt="light-mode"
        />
      ) : (
        <ImageButtons
          click={changeMode}
          style={{ top: "5rem", left: "80%" }}
          image={dark}
          alt="dark-mode"
        />
      )}
      <div className={styles.greetingCont}>
        <h1
          className={
            mode === "dark"
              ? styles.greetingText
              : `${styles.greetingText} ${styles.greetingTextLight}`
          }
        >
          {text}
        </h1>
        <h2
          className={
            mode === "dark"
              ? styles.greetingUnderText
              : `${styles.greetingUnderText} ${styles.greetingUnderTextLight}`
          }
          ref={underTextRef}
          style={{ opacity: 0 }}
        >
          {underText}
        </h2>
      </div>
    </>
  );
}

export default Greeting;
