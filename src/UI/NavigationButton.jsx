import styles from "../css/NavigationButton.module.css";

function NavigationButton({ position, text }) {
  return (
    <div className={styles.navBtn} style={position}>
      <p className={styles.nameBtn}>{text}</p>
    </div>
  );
}

export default NavigationButton;
