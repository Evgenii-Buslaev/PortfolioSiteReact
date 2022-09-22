import styles from "../css/NavigationButton.module.css";

function NavigationButton({ to, position, text }) {
  return (
    <div className={styles.navBtn} style={position}>
      <p>{text}</p>
    </div>
  );
}

export default NavigationButton;
