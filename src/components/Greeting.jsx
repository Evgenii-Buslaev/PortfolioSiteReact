import ImageButtons from "../UI/ImageButtons";

import styles from "../css/Greeting.module.css";

import dark from "../icons/mode/dark-mode.png";
import light from "../icons/mode/light-mode.png";

function Greeting({ mode, changeMode }) {
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
        <h1>Добро пожаловать</h1>
        <h2>На страницу моих работ</h2>
      </div>
    </>
  );
}

export default Greeting;
