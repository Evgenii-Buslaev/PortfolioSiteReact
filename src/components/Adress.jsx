import styles from "../css/Adress.module.css";

function Adress({ mode, adress, link }) {
  return (
    <div className={styles.adressCont}>
      <h3
        className={
          mode === "dark"
            ? styles.adressContHeader
            : styles.adressContHeaderLight
        }
      >
        {adress}
      </h3>
      <iframe
        src={link}
        title={adress}
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Adress;
