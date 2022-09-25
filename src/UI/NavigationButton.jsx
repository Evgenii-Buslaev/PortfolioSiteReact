import styles from "../css/NavigationButton.module.css";

function NavigationButton({ position, text, click }) {
  return (
    <div className={styles.navBtn} style={position} onClick={click}>
      <p className={styles.nameBtn}>{text}</p>
    </div>
  );
}

export default NavigationButton;
