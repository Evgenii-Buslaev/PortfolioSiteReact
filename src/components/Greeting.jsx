import { useState, useEffect } from "react";

import ImageButtons from "../UI/ImageButtons";

import styles from "../css/Greeting.module.css";

import dark from "../icons/mode/dark-mode.png";
import light from "../icons/mode/light-mode.png";

function Greeting({ mode, changeMode }) {
  const [text, setText] = useState("");
  const [underText, setUnderText] = useState("");

  const textContent = [..."Добро пожаловать"];

  useEffect(() => {
    const greeting = setTimeout(() => {
      let newText = textContent.slice(0, text.length + 1);
      setText(newText);
    }, 150);
    if (text.length === textContent.length) {
      clearTimeout(greeting);
      setUnderText("на страницу моих работ");
    }
  }, [text, underText]);

  return (
    <>
      {mode === "dark" ? (
        <ImageButtons
          click={changeMode}
          style={{ top: "5rem", left: "90%" }}
          image={dark}
          alt="dark-mode"
        />
      ) : (
        <ImageButtons
          click={changeMode}
          style={{ top: "5rem", left: "90%" }}
          image={light}
          alt="light-mode"
        />
      )}
      <div className={styles.greetingCont}>
        <h1>{text}</h1>
        <h2>{underText}</h2>
      </div>
    </>
  );
}

export default Greeting;
