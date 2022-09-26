import NetworksBar from "./NetworksBar";
import Adress from "./Adress";

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

const adressLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.4946568330947!2d65.54810291618271!3d57.14570118094881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43bbe169a941e0ed%3A0x5a0dae51336c3133!2z0JrQvtC70YzRgdC60LjQuSDQv9C10YAuLCAxLCDQotGO0LzQtdC90YwsINCi0Y7QvNC10L3RgdC60LDRjyDQvtCx0LsuLCA2MjUwNDg!5e0!3m2!1sru!2sru!4v1659264340318!5m2!1sru!2sru";

function Contacts({ mode }) {
  return (
    <div className={styles.contactsCont}>
      <h2
        className={
          mode === "dark"
            ? styles.contactsHeader
            : `${styles.contactsHeader} ${styles.contactsHeaderLight}`
        }
      >
        Контакты
      </h2>
      <div className={styles.rowsCont}>
        <div
          className={
            mode === "dark" ? styles.row : `${styles.row} ${styles.rowLight}`
          }
        >
          Номер телефона: <a href="tel:+79048895462">+7(904)-889-54-62</a>
        </div>
        <div
          className={
            mode === "dark" ? styles.row : `${styles.row} ${styles.rowLight}`
          }
        >
          Электронная почта:{" "}
          <a href="mailto:eugenebus144@gmail.com">eugenebus144@gmail.com</a>
        </div>
      </div>
      <NetworksBar array={contacts} />
      <Adress
        mode={mode}
        adress="Тюмень, Кольский переулок, 1"
        link={adressLink}
      />
    </div>
  );
}

export default Contacts;
