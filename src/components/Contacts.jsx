import NetworksBar from "./NetworksBar";

import vk from "../icons/contacts/VK.png";
import telegram from "../icons/contacts/TG.png";
import linkedin from "../icons/contacts/LN.png";
import github from "../icons/contacts/GH.png";

import styles from "../css/Contacts.module.css";

const contacts = [
  { title: "vk", image: vk, link: "https://vk.com/eugenebus" },
  { title: "telegram", image: telegram, link: "https://t.me/eugenebus144" },
  {
    title: "linkedin",
    image: linkedin,
    link: "https://www.linkedin.com/in/евгений-буслаев-79196824b/",
  },
  {
    title: "github",
    image: github,
    link: "https://github.com/Evgenii-Buslaev",
  },
];

function Contacts() {
  return (
    <div className={styles.contactsCont}>
      <h2 className={styles.contactsHeader}>Контакты</h2>
      <div className={styles.rowsCont}>
        <div className={styles.row}>
          Номер телефона: <a href="tel:+79048895462">+7(904)-889-54-62</a>
        </div>
        <div className={styles.row}>
          Электронная почта:{" "}
          <a href="mailto:eugenebus144@gmail.com">eugenebus144@gmail.com</a>
        </div>
      </div>
      <NetworksBar array={contacts} />
    </div>
  );
}

export default Contacts;
