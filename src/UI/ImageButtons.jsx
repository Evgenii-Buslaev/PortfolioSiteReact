import styles from "../css/ImageButtons.module.css";

function ImageButtons({ click, style, image, alt }) {
  return (
    <div>
      <button
        className={styles.button}
        style={{
          ...style,
          appearance: "none",
          border: "none",
          outline: "none",
          background: "none",
        }}
        onClick={click}
      >
        <img className={styles.image} src={image} alt={alt}></img>
      </button>
    </div>
  );
}

export default ImageButtons;
