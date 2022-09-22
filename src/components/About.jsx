import styles from "../css/About.module.css";
import photo from "../images/evgenii-buslaev.PNG";

function About() {
  return (
    <div className={styles.aboutCont}>
      <h1>О себе</h1>
      <div>
        <img src={photo} alt="developer" />
        <div>
          <button>Посмотреть резюме</button>
          <button>Аккаунт на GitHub</button>
        </div>
      </div>
    </div>
  );
}

export default About;
