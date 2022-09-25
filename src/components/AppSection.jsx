import styles from "../css/AppSection.module.css";

function AppSection({ mode, name, children }) {
  let contStyles;

  if (name === "greeting") {
    contStyles =
      mode === "dark"
        ? styles.greeting
        : `${styles.greeting} ${styles.greetingLight}`;
  }

  if (name === "about") {
    contStyles =
      mode === "dark" ? styles.about : `${styles.about} ${styles.aboutLight}`;
  }

  if (name === "portfolio") {
    contStyles =
      mode === "dark"
        ? styles.portfolio
        : `${styles.portfolio} ${styles.portfolioLight}`;
  }

  if (name === "contacts") {
    contStyles =
      mode === "dark"
        ? styles.contacts
        : `${styles.contacts} ${styles.contactsLight}`;
  }

  return <section className={contStyles}>{children}</section>;
}

export default AppSection;
