import styles from "../css/Item.module.css";

function Item({ name, click }) {
  return (
    <div className={styles.item} onClick={click}>
      <h3>{name}</h3>
    </div>
  );
}

export default Item;
