import styles from "../css/About.module.css";
import photo from "../images/evgenii-buslaev.PNG";

function About() {
  return (
    <div className={styles.aboutCont}>
      <h1 className={styles.aboutHeader}>О себе</h1>
      <div className={styles.aboutContent}>
        <div className={styles.photoBtns}>
          <div className={styles.photoCont}>
            <img src={photo} alt="developer" />
          </div>
          <div className={styles.aboutButtons}>
            <a href="/" target="_blank">
              Посмотреть резюме
            </a>
            <a
              href="https://github.com/Evgenii-Buslaev"
              target="_blank"
              rel="noreferrer"
            >
              Аккаунт на GitHub
            </a>
          </div>
        </div>
        <div className={styles.aboutDescription}>
          <p>
            В течение последних шести месяцев я{" "}
            <strong>самостоятельно обучаюсь веб-разработке.</strong> Выполняя
            работы, которые Вы увидите в разделе портфолио, я сталкивался со
            множеством проблем, способы решения которых я искал в google и/или
            спрашивал у более опытных разработчиков, что, в свою очередь, уже{" "}
            <strong>дало мне некоторый опыт.</strong> В данный момент я
            продолжаю обучение, но{" "}
            <strong>предполагаю, что готов работать</strong> в команде и дальше
            развиваться в разработке. Для более полного ознакомления с моими
            навыками разработки Вы можете просмотреть{" "}
            <strong>мое резюме, а также аккаунт на GitHub.</strong> Спасибо за
            интерес к моему портфолио!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
