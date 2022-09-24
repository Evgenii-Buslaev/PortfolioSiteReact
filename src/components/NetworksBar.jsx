import styles from "../css/NetworksBar.module.css";

function NetworksBar({ array }) {
  return (
    <div className={styles.networksBarCont}>
      {array.map((contact) => (
        <a
          href={contact.link}
          target="_blank"
          rel="noreferrer"
          key={contact.title}
        >
          <img src={contact.image} alt={contact.title}></img>
        </a>
      ))}
    </div>
  );
}

export default NetworksBar;
