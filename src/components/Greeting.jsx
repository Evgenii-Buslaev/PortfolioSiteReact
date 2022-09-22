import styles from "../css/Greeting.module.css";

function Greeting() {
  return (
    <div className={styles.greetingCont}>
      <h1>Добро пожаловать</h1>
      <h2>На страницу моих работ</h2>
    </div>
  );
}

export default Greeting;
