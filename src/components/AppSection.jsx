import styles from "../css/AppSection.module.css";

function AppSection({ name, children }) {
  let contStyles;

  if (name === "greeting") contStyles = styles.greeting;
  if (name === "about") contStyles = styles.about;
  if (name === "portfolio") contStyles = styles.portfolio;
  if (name === "contacts") contStyles = styles.contacts;

  return <section className={contStyles}>{children}</section>;
}

export default AppSection;
