import styles from "../css/AppSection.module.css";

function AppSection({ mode, name, children }) {
  let contStyles;

  switch (name) {
    case "greeting":
      contStyles =
        mode === "dark"
          ? styles.greeting
          : `${styles.greeting} ${styles.greetingLight}`;
      break;

    case "about":
      contStyles =
        mode === "dark" ? styles.about : `${styles.about} ${styles.aboutLight}`;
      break;

    case "portfolio":
      contStyles =
        mode === "dark"
          ? styles.portfolio
          : `${styles.portfolio} ${styles.portfolioLight}`;
      break;

    case "contacts":
      contStyles =
        mode === "dark"
          ? styles.contacts
          : `${styles.contacts} ${styles.contactsLight}`;
      break;
    default:
      contStyles =
        mode === "dark"
          ? styles.greeting
          : `${styles.greeting} ${styles.greetingLight}`;
  }

  return <section className={contStyles}>{children}</section>;
}

export default AppSection;
